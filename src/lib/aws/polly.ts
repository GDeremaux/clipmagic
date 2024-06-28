"use server";

import { PollyClient, PollyClientConfig, SynthesizeSpeechCommand, VoiceId, LanguageCode, Polly, DescribeVoicesCommand, Engine } from "@aws-sdk/client-polly";
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3 } from "@/lib/aws/s3";
import { randomUUID } from "crypto";
import uploadFile from "@/lib/aws/s3/upload-file";
import { Readable } from "stream";
import { StartTranscriptionJobCommand, GetTranscriptionJobCommand, LanguageCode as PollyLanguageCode } from '@aws-sdk/client-transcribe';
import { transcribe } from "./transcribe";
import axios from "axios";
import { awsTranscriptionToWordLevelTranscription } from "../transcription";

const polly = new PollyClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

interface GenerateAudioWithTimestampsSettings {
  Text: string;
  LanguageCode: LanguageCode;
}

export const generateAudioWithTimestamps = async (voiceId: VoiceId, settings: GenerateAudioWithTimestampsSettings) => {
  try {
    const command = new SynthesizeSpeechCommand({
      OutputFormat: "mp3",
      VoiceId: voiceId,
      Engine: "neural",
      ...settings
    });

    const data = await polly.send(command);
    const audioStream = data.AudioStream;
    const audioBuffer = await streamToBuffer(audioStream);

    const fileName = `${randomUUID()}.mp3`;
    const key = await uploadFile({
      fileName,
      file: audioBuffer
    });
    const audioUri = `s3://${process.env.AWS_S3_BUCKET_NAME}/${key}`;

    const TranscriptionJobName = randomUUID();
    const transcriptionCommand = new StartTranscriptionJobCommand({
      TranscriptionJobName,
      LanguageCode: settings.LanguageCode as PollyLanguageCode,
      Media: { MediaFileUri: audioUri },
    })
    const { TranscriptionJob } = await transcribe.send(transcriptionCommand);
    let transcriptFileUri: string | undefined = undefined;

    while (transcriptFileUri === undefined) {
      await new Promise(resolve => setTimeout(resolve, 2000));  // Wait for 2 seconds

      const getTranscriptionJobCommand = new GetTranscriptionJobCommand({ TranscriptionJobName });
      const data = await transcribe.send(getTranscriptionJobCommand);
      transcriptFileUri = data.TranscriptionJob?.Transcript?.TranscriptFileUri;
    }

    let awsTranscription = {} as any;
    if (transcriptFileUri) {
      awsTranscription = (await axios.get(transcriptFileUri)).data;
    } else {
      throw new Error ("Transcription failed, no URL found for transcript file");
    }

    const transcription = awsTranscriptionToWordLevelTranscription(awsTranscription)

    return { audioBuffer, transcription, key };

  } catch (error) {
    throw error;
  }

}

async function streamToBuffer(stream: any): Promise<Buffer> {
  if (stream instanceof Readable) {
    return new Promise<Buffer>((resolve, reject) => {
      const chunks: Uint8Array[] = [];
      stream.on('data', (chunk) => chunks.push(chunk));
      stream.on('end', () => resolve(Buffer.concat(chunks)));
      stream.on('error', reject);
    });
  } else if (stream instanceof Blob) {
    return stream.arrayBuffer().then((arrayBuffer) => Buffer.from(arrayBuffer));
  } else if (Buffer.isBuffer(stream)) {
    return stream;
  } else {
    throw new Error('Unsupported stream type');
  }
}

export const getVoices = async(model: Engine) => {
  const command = new DescribeVoicesCommand({
      Engine: model
  });

  try {
      const data = await polly.send(command);
      return data.Voices;
  } catch (error) {
      console.error(error)
  }
}
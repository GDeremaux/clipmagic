interface ElevenlabsAlignment {
  characters: string[];
  character_start_times_seconds: number[];
  character_end_times_seconds: number[];
}

interface Character {
  character: string;
  start: number;
  end: number;
}

interface Word {
  word: string;
  start: number;
  end: number;
  characters: Character[];
}

interface Sentence {
  sentence: string;
  start: number;
  end: number;
  words: Word[];
}

interface Transcription {
  characters: Character[];
  words: Word[];
  sentences: Sentence[];
}

export const getCharacterLevelTimestamps = (alignment: any) => {
  alignment = alignment as ElevenlabsAlignment;

  let transcription: Transcription = {
    characters: [],
    words: [],
    sentences: []
  };

  for (let i = 0; i < alignment.characters.length; i++) {  // For each character index
    transcription.characters.push({
      character: alignment.characters[i],
      start: alignment.character_start_times_seconds[i],
      end: alignment.character_end_times_seconds[i]
    });
  }

  return transcription;
}

export const getWordLevelTimestamps = (alignment: any) => {
  const transcription = getCharacterLevelTimestamps(alignment);

  transcription.characters.push({
    character: " ",
    start: 0,
    end: 0
  });  // Add a space character at the end to make sure the last word is added

  let currentWord: Word = {
    word: "",
    start: 0,
    end: 0,
    characters: []
  };

  for (const character of transcription.characters) {
    if (character.character === " ") {
      transcription.words.push(currentWord);

      currentWord = {
        word: "",
        start: character.start,
        end: character.end,
        characters: []
      };
    } else {
      if (currentWord.word === "") {
        currentWord.start = character.start;
      }

      currentWord.word += character.character;
      currentWord.characters.push(character);
      currentWord.end = character.end;
    }
  }

  transcription.characters.pop();  // Remove the last space character

  return transcription;
};

interface GetSentenceLevelTimestampsProps {
  maxLength: number,
  maxDuration: number,
  startAdjust: number,
  endAdjust: number,
  alignment?: any,
  wordLevelTranscription?: Transcription
}

export const getSentenceLevelTimestamps = ({
  alignment,
  wordLevelTranscription,
  maxLength,
  maxDuration,
  startAdjust = 0,
  endAdjust = 0
}: GetSentenceLevelTimestampsProps) => {
  if (!wordLevelTranscription && !alignment) {
    throw new Error("Either alignment or wordLevelTranscription must be provided");
  }

  const transcription = wordLevelTranscription || getWordLevelTimestamps(alignment);

  let currentSentence: Sentence = {
    sentence: "",
    start: 0,
    end: 0,
    words: []
  };

  const pushSentence = () => {
    currentSentence.start += startAdjust;
    currentSentence.end += endAdjust;
    currentSentence.sentence = currentSentence.sentence.slice(0, -1);  // Remove the last space character
    transcription.sentences.push(currentSentence);
  }

  for (const word of transcription.words) {
    if (currentSentence.sentence.length + word.word.length > maxLength || currentSentence.end - currentSentence.start > maxDuration) {
      pushSentence();

      currentSentence = {
        sentence: "",
        start: word.start,
        end: word.end,
        words: []
      };

    }
    currentSentence.sentence += word.word + " ";
    currentSentence.words.push(word);
    currentSentence.end = word.end;
  }

  pushSentence();
  console.log(transcription);

  return transcription;
}

export const awsTranscriptionToWordLevelTranscription = (transcription: any): Transcription => {
  const items = transcription.results.items;

  const words = items.map((item: any) => {
    return {
      word: item.alternatives[0].content,
      start: item.start_time,
      end: item.end_time,
      characters: []
    }
  })

  const wordLeveTranscription = {
    characters: [],
    words,
    sentences: []
  }

  return wordLeveTranscription;
}
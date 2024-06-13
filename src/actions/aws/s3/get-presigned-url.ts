"use server";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";  // Import the S3 client and PutObjectCommand
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";  // Import the presigner
import { randomUUID } from "crypto";

const s3 = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY || "",
  }
});

const getPresignedUrl = async (
  fileType: string,
) => {
  const ext = fileType.split("/")[1];  // Get the file extension

  const Key = `user-upload/${randomUUID()}.${ext}`;  // Generate a random UUID for the file name

  const s3Params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key,
    ContentType: `image/${ext}`,
    Conditions: [
      ["content-length-range", 0, 10**9]  // Limit the file size to 1GB
    ]
  };

  const command = new PutObjectCommand(s3Params);  // Create a new PutObjectCommand

  const uploadUrl = await getSignedUrl(s3, command, {expiresIn: 60});  // Get the presigned URL

  return {
    uploadUrl,
    key:Key
  };
}

export default getPresignedUrl;
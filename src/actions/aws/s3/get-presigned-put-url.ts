"use server";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";  // Import the S3 client and PutObjectCommand
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";  // Import the presigner
import { randomUUID } from "crypto";
import { s3 } from "@/lib/aws/s3"

const getPresignedPutUrl = async (
  fileExtension: string
) => {
  const Key = `user-upload/${randomUUID()}.${fileExtension}`;  // Generate a random UUID for the file name

  const s3Params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key,
    Conditions: [
      ["content-length-range", 0, 10**9]  // Limit the file size to 1GB
    ]
  };

  const command = new PutObjectCommand(s3Params);  // Create a new PutObjectCommand

  const uploadUrl = await getSignedUrl(s3, command, {expiresIn: 900});  // Get the presigned URL

  return {
    uploadUrl,
    key:Key
  };
}

export default getPresignedPutUrl;
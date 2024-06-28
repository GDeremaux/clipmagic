import axios from "axios";
import getPresignedPutUrl from "../../../actions/aws/s3/get-presigned-put-url";

interface UploadFileProps {
  file: File | Buffer;
  fileName?: string;
  axiosConfig?: any;
}

const uploadFile = async ({
  file,
  fileName,
  axiosConfig,
}: UploadFileProps) => {
  let fileExtension = "";

  if (fileName) {
    fileExtension = fileName.split(".").pop() || "";
  } else if (!fileName && file instanceof File) {
    fileExtension = file.name.split(".").pop() || "";
  } else {
    throw new Error("File name is required for buffer uploads!");
  }

  const { uploadUrl, key } = await getPresignedPutUrl(fileExtension);

  try {
    await axios.put(uploadUrl, file, axiosConfig);
  } catch (error) {
    console.error("Failed to upload file to S3!", error);
  }

  return key;
}

export default uploadFile;
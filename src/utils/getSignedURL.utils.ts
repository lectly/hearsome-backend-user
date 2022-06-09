import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as uuid from "uuid";

const AWS_CREDENTIAL_EXPIRY = 3600; // 3600 seconds

const client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_KEY || "",
  },
  region: process.env.AWS_REGION || "",
});

export async function getSignedURL() {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET_NAME || "",
    Key: uuid.v4(),
    expires: AWS_CREDENTIAL_EXPIRY,
    ContentType: "audio/aac",
  };

  const command = new PutObjectCommand(params);
  return {
    signedURL: await getSignedUrl(client, command, {
      expiresIn: AWS_CREDENTIAL_EXPIRY,
    }),
    objectName: params.Key,
    bucketName: params.Bucket,
  };
}

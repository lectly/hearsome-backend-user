import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as uuid from "uuid";

const params = {
  Bucket: process.env.AWS_S3_BUCKET_NAME,
  Key: "",
  expires: 3600,
  ContentType: "audio/aac",
};
const client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_KEY || "",
  },
  region: process.env.AWS_REGION || "",
});
// "command" variable must be defined inside the getSignedURL function so the key variable(s3 object name) get a different value each time we access the endpoint
export async function getSignedURL() {
  params.Key = uuid.v4(); // generate a unique string for the key each time
  const command = new PutObjectCommand(params);
  return [
    await getSignedUrl(client, command, { expiresIn: 3600 }),
    params.Key,
    params.Bucket,
  ];
}

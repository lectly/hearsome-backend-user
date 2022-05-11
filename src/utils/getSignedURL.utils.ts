import { Router, Request, Response } from "express";
import {} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as uuid from "uuid";

import { config } from "../config";

const params = {
  Bucket: config.AWS_S3_BUCKET_NAME,
  Key: uuid.v4(),
  expires: 200,
  ContentType: "application/json",
};
const client = new S3Client({
  credentials: {
    accessKeyId: config.AWS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_KEY,
  },
  region: config.AWS_REGION,
});

const command = new PutObjectCommand(params);
export async function getSignedURL() {
  return await getSignedUrl(client, command, { expiresIn: 3600 });
}

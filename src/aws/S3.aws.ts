import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as uuid from "uuid";

export class S3 {
  static bucketName = process.env.AWS_S3_BUCKET_NAME || "";
  static expiry = 3600; // 60*60 seconds or 1 hour
  static client = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_KEY_ID || "",
      secretAccessKey: process.env.AWS_SECRET_KEY || "",
    },
    region: process.env.AWS_REGION || "",
  });

  static async getSignedURL() {
    const params = {
      Bucket: this.bucketName,
      Key: uuid.v4(),
      expires: this.expiry,
      ContentType: "audio/aac",
    };

    const command = new PutObjectCommand(params);

    return {
      signedURL: await getSignedUrl(this.client, command, {
        expiresIn: this.expiry,
      }),
      objectName: params.Key,
      bucketName: params.Bucket,
    };
  }
}

import { Router, Request, Response } from "express";
import * as uuid from "uuid";
import aws from "aws-sdk";
import {
  AWSAccessKeyId,
  AWSSecretKey,
  region,
  bucketName,
} from "../../../config.json";
const router = Router({ mergeParams: true });

// ********* creating an amazon s3 service object ********
const S3 = new aws.S3();

// *********  s3 service congifuration *********
S3.config.update({
  accessKeyId: AWSAccessKeyId,
  secretAccessKey: AWSSecretKey,
  region: region,
});

// ********* Generate the signedURL *********

function getSignedURL(req: Request, res: Response, next: Function) {
  const params = {
    Bucket: bucketName,
    Key: uuid.v4(),
    Expires: 200,
    ContentType: "application/json",
  };
  S3.getSignedUrl("putObject", params, function (err, signedURL) {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      return res.json({ postURL: signedURL });
    }
  });
}

router.route("/").get(getSignedURL);
export { router as urlRouter };

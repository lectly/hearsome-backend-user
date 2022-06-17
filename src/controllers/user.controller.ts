import { Request, Response, NextFunction } from "express";
import { S3 } from "../aws";

export class UserController {
  static async getSignedURL(req: Request, res: Response, next: NextFunction) {
    try {
      const { signedURL, objectName, bucketName } = await S3.getSignedURL();
      return res.status(200).json({ signedURL, objectName, bucketName });
    } catch (error) {
      return next(error);
    }
  }
}

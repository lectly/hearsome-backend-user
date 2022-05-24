import { Request, Response, NextFunction } from "express";
import { getSignedURL } from "../utils";

export class UserController {
  static async getSignedURL(req: Request, res: Response, next: NextFunction) {
    try {
      const [url, key, bucket] = await getSignedURL();

      return res
        .status(200)
        .json({ signedURL: url, objectName: key, bucketName: bucket });
    } catch (error) {
      return next(error);
    }
  }
}

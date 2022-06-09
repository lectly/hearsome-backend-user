import { Request, Response, NextFunction } from "express";
import { getSignedURL } from "../utils";

export class UserController {
  static async getSignedURL(req: Request, res: Response, next: NextFunction) {
    try {
      const { signedURL, objectName, bucketName } = await getSignedURL();
      return res.status(200).json({ signedURL, objectName, bucketName });
    } catch (error) {
      return next(error);
    }
  }
}

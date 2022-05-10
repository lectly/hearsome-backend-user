import { Request, Response, NextFunction } from "express";
import { getSignedURL } from "../utils";

export class UserController {
  static async getSignedURL(req: Request, res: Response, next: NextFunction) {
    try {
      const url = await getSignedURL();
      console.log(url);
      return res.status(200).send(url);
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
}

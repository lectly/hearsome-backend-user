import { isCelebrateError } from "celebrate";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (isCelebrateError(err)) {
    res.status(422).json({
      error: err.name,
      errorType: "UNPROCESSABLE ENTITY",
      en: err.message,
    });
    return;
  }
  next(err);
};

import express, { Application, Request, Response } from "express";
import * as Joi from "joi";

const headerSchema = Joi.object({
  authorization: Joi.string().required(),
});

export class VerifyHeader {
  public static verifyAuthentication(
    req: Request,
    res: Response,
    next: Function
  ) {
    const options = {
      abortEarly: false, // include all errors
      allowUnknown: true, // ignore unknown props
      stripUnknown: true, // remove unknown props
    };

    const { error, value } = headerSchema.validate(req.headers, options);

    if (error) {
      res
        .status(404)
        .send(
          `Validation error: ${error.details.map((x) => x.message).join(", ")}`
        );
    } else {
      next();
    }
  }
}

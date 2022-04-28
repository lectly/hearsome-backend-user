import express, { Application, Request, Response } from "express";
import * as Joi from "joi";
import {
  // Creates a validator that generates middlewares
  createValidator,
} from "express-joi-validation";

const validator = createValidator();
const headerSchema = Joi.object({
  authorization: Joi.string().required(),
});

export class VerifyHeader {
  public static verifyAuthentication(req: Request, res: Response, next: Function) {
    validator.headers(headerSchema);
  }
}

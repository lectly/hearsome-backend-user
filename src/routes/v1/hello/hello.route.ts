import { Router, Request, Response } from "express";
import { userAuth } from "../../../middleware";
import * as Joi from 'joi'
import {
  // Creates a validator that generates middlewares
  createValidator
} from 'express-joi-validation'

//********Header verification*********/
const validator = createValidator()
const headerSchema = Joi.object({
  authorization: Joi.string().required()
})


const router = Router({ mergeParams: true });
router.use("/",validator.headers(headerSchema), userAuth.verifyToken);
router.route("/").get(function (req: Request, res: Response) {
  res.status(200).send("authorized");
});

export { router as helloRouter };

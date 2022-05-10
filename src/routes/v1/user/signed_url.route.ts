import { UserController } from "./../../../controller";
import { Router, Request, Response, NextFunction } from "express";

const router = Router({ mergeParams: true });

router.route("/").get(UserController.getSignedURL);
export { router as signedURLRoute };

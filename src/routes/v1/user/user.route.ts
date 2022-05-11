import { Router, Request, Response } from "express";
import { UserController } from "../../../controller";

const router = Router({ mergeParams: true });

router.use("/signed_url", UserController.getSignedURL);

export { router as userRouter };

import { Router } from "express";
import { UserController } from "../../../controllers";

const router = Router({ mergeParams: true });

router.use("/signed_url", UserController.getSignedURL);
router.use("/transcribe", UserController.transcribe);

export { router as userRouter };

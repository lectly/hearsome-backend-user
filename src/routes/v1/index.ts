import express from "express";
import { UserAuth } from "../../middleware";
import { helloRouter } from "./hello";
import { userRouter } from "./user";
const router = express.Router();
router.use("/", UserAuth.verifyToken);

router.use("/hello", helloRouter);
router.use("/user", userRouter);

export { router as v1Router };

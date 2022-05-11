import express from "express";
import { UserAuth } from "../../middleware";
import { userRouter } from "./user";

const router = express.Router();

router.use("/", UserAuth.verifyToken);

router.use("/user", userRouter);

export { router as v1Router };

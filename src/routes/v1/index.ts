import express from "express";
import { UserAuth } from "../../middleware";
import { helloRouter } from "./hello";

const router = express.Router();
router.use("/", UserAuth.verifyToken);

router.use("/hello", helloRouter);

export { router as v1Router };

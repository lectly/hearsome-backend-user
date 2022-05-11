import { Router, Request, Response } from "express";
import { signedURLRoute } from "./signed_url.route";
const router = Router({ mergeParams: true });

router.route("/").get(function (req: Request, res: Response) {
  res.status(200).send("Hello World!");
});
router.use("/signed_url", signedURLRoute);

export { router as userRouter };

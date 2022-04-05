import { Router, Request, Response } from "express";
import { userAuth } from "../../../middleware";
const router = Router({ mergeParams: true });

router.use("/", userAuth.verifyToken);
router.route("/").get(function (req: Request, res: Response) {
  res.status(200).send("authorized");
});

export { router as helloRouter };

import { Router, Request, Response } from "express";
import { UserAuth,VerifyHeader } from "../../../middleware";



const router = Router({ mergeParams: true });
router.use("/",VerifyHeader.verifyAuthentication, UserAuth.verifyToken);
router.route("/").get(function (req: Request, res: Response) {
  res.status(200).send("authorized");
});

export { router as helloRouter };

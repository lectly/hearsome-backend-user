import { Router, Request, Response } from "express";

const router = Router({ mergeParams: true });

router.route("/").get(function (req: Request, res: Response) {
  res.status(200).send("Hello World!");
});

export { router as helloRouter };

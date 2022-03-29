import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", function (req: Request, res: Response) {
    res.send("<h1>Hello from /api/v1</h1>");
});

module.exports = router;
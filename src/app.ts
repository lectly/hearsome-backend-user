import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import { router } from "./routes";

/******* Environment variables *******/
const PORT = process.env.PORT || 5000;

/****** Setting up Express app *******/
const app: Application = express();
app.use(express.json());
app.use(cors());

/******* Morgan Logger *******/
app.use(morgan("dev"));

/****** Setting up Express routes *******/
app.get("/", function (req: Request, res: Response) {
  res.status(200).send("App Working!");
});

app.use("/", router);

/****** Setting up Express app server *******/
app.listen(PORT, () =>
  console.log("\x1b[32m%s\x1b[0m", "Express app listening on port: " + PORT)
);

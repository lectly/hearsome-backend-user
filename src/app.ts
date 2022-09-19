import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express, { Application, Request, Response, NextFunction } from "express";
import admin, { ServiceAccount, credential } from "firebase-admin";
import cors from "cors";
import favicon from "serve-favicon";

import { router } from "./routes";
import { joiMiddleware } from "./middleware";
import { Environment } from "./utils";

/******* Environment variables *******/
const PORT = process.env.PORT || 5000;
const privateKey =
  process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, "\n") || "";
const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL || "";
const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID || "";

//******** Setting up Firebase app **********
const serviceAccount: ServiceAccount = {
  privateKey,
  clientEmail,
  projectId,
};

admin.initializeApp({
  credential: credential.cert(serviceAccount),
});

/****** Setting up Express app *******/
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(favicon("./favicon.ico"));

/******* Morgan Logger *******/
// if (!Environment.isProduction()) {
//   const morgan = require("morgan");
//   app.use(morgan("dev"));
// }

/****** Setting up Express routes *******/
app.get("/", function (req: Request, res: Response) {
  res.status(200).send("App Working!");
});

app.use("/", joiMiddleware.headersCheck, router);

// Handle errors from Joi validations
app.use(joiMiddleware.errorHandler);
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  return res.status(400).json({ error: err, request: req });
});

// As a last resort, if route is not found, display 404 error
app.use(function (req, res, next) {
  return res.status(404).json({
    error:
      "Error 404 trying to access path: " + req.headers.host + req.originalUrl,
  });
});

/****** Setting up Express app server *******/
app.listen(PORT, () =>
  console.log("\x1b[32m%s\x1b[0m", "Express app listening on port: " + PORT)
);

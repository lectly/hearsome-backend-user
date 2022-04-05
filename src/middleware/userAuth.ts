import express, { Application, Request, Response } from "express";
import admin from "firebase-admin";
export abstract class userAuth {

  public static verifyToken(req: Request, res: Response, next: Function) {
    if (req.headers.authorization) {
      console.log(req.headers.authorization);
      admin
        .auth()
        .verifyIdToken(
          req.headers.authorization.substring(
            7,
            req.headers.authorization.length
          )
        )
        .then(() => {
          next();
        })
        .catch(() => {
          res.status(403).send("Unauthorized");
        });
    } else {
      res.status(403).send("Unauthorized");
    }
  }
}

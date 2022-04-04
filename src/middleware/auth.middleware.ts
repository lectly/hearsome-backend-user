import express, { Application, Request, Response } from "express";
import admin from "firebase-admin";
const authorized: boolean = true;

// export function verifyToken(req: Request, res: Response, next: Function) {
//   if (req.headers.authtoken) {
//     if (Array.isArray(req.headers.authtoken)) {
//       req.headers.authtoken = req.headers.authtoken.join("");
//     }
//     admin
//       .auth()
//       .verifyIdToken(req.headers.authtoken)
//       .then(() => {
//         next();
//       })
//       .catch(() => {
//         res.status(403).send("Unauthorized");
//       });
//   } else {
//     res.status(403).send("Unauthorized");
//   }
// }

export function verifyToken(req: Request, res: Response, next: Function) {
  if (authorized) {
    next();
  } else {
    res.status(403).send("Unauthorized!");
    return;
  }
}

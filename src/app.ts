import express, { Application, Request, Response } from "express";

const PORT = process.env.port || 5000;

const app: Application = express();

app.get("/", function (req: Request, res: Response) {
    res.send("<h1>Hello from index page</h1>");
});
app.use('/api/v1',require('./routes/api/v1'));

app.listen(PORT, () => console.log("listening on port: " + PORT));

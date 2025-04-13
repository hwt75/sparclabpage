import express, { Request, Response } from "express";
import path from "path";
import { config } from "./config";
import cors from "cors";

import bodyParser from "body-parser";

const app = express();
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"../about-us/sparc/index.html"))
});

app.use(cors());
// Middleware to parse JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  express.static(path.resolve(__dirname, "../about-us/fmecg")),
);
app.use(
  express.static(path.resolve(__dirname, "../about-us/ecsa")),
)
app.get("/project/fmecg",(req,res)=> {
  res.sendFile(path.join(__dirname,"../about-us/fmecg/index.html"))
})
app.get("/project/ecsa",(req,res)=> {
  res.sendFile(path.join(__dirname,"../about-us/ecsa/index.html"))
})
app.get("/test", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

// catch exception and log
app.use((err: any, req: any, res: any, next: any) => {
  if (err.stack) {
    console.log(
      `node server error. \nTime: ${new Date()} \nPlease refer to the attached message: \nError code: ${
        err.code
      } \nError message: ${err.message} \nError stack: ${err.stack} \n`
    );
    err.stack = "";
    err.message = "internal server error";
    next(err);
  } else {
    next();
  }
});
app.listen(config.APP_PORT, () => {
  console.log(
    `Server is running at http://${config.APP_HOST}:${config.APP_PORT}`
  );
});

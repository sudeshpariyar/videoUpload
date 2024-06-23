import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user";
import videoRouter from "./routes/video";

dotenv.config();

const app: Express = express();

app.use(cors({ credentials: true, origin: "http://localhost:4200" }));
app.use(cookieParser());

app.use(express.static("public"));
app.use("/uploads/videos", express.static("uploads/videos"));
app.use(express.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: false }));

// for parsing application/json
app.use(bodyParser.json());
app.use("/uploads", express.static(__dirname + "/uploads/videos"));

const port = process.env.PORT || 8000;

app.use("/api/user", userRouter);

app.use("/api/video", videoRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

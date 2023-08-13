import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globerRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import "dotenv/config";

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug"); /* pug를 view engine으로 설정 */
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;

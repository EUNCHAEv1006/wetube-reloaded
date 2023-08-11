import "./db";
import "./models/Video";
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globerRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import "dotenv/config";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug"); /* pug를 view engine으로 설정 */
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(
  express.urlencoded({ extended: true })
); /* express application가 form의 value를 이해하 수 있도록 하고, 형식 변형시켜줌 */
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);

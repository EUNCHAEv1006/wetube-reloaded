import express from "express";
import morgan from "morgan";
import "dotenv/config"

console.log("dotenv",process.env.API_KEY);
const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit user");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleEWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleEWatchVideo);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => 
    console.log(`✅ Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
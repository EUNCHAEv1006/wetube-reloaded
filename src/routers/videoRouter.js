import express from "express";

const videoRouter = express.Router();

const handleEWatchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleEWatchVideo);

export default videoRouter;
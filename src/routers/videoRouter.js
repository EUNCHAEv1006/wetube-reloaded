import express from "express";
import { watch, getEdit, upload, deleteVideo, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch); /* express가 숫자만 받아옴 */
videoRouter.get("/:id(\\d+)/edit", getEdit);
videoRouter.post("/:id(\\d+)/edit", postEdit);

export default videoRouter;
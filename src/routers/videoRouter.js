import express from "express";
import { watch, getEdit, upload, deleteVideo, postEdit } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

/* 페이지를 get해서 들어감 -> 뭔가를 클릭 -> form에 뭔가를 입력 -> submit 버튼 누름 -> post request 보냄 
    -> 해당하는 post controller 실행 -> 그 controller는 body로부터 정보를 얻음-> 이것 저것 저장함! */

export default videoRouter;
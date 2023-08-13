import Video from "../models/Video";

/* callback 방법

Video.find({}, (error, videos) => {
  if(error){
    return res.render("server-error");
  }
  return res.render("hone", { pageTitle: "Home", videos });
}); 

*/

export const home = async (req, res) => {
  /* 해당 함수가 asynchronous 일 때만 사용가능해서 async 사용해줌 */
  const videos = await Video.find(
    {}
  ); /* await는 database를 기다려줌 , 함수 안에서만 사용 가능 */
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUpload = (req, res) => {
  const { title } = req.body;
  return res.redirect("/");
};

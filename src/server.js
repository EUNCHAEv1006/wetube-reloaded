import express from "express";

const PORT = 4000;

const app = express(); /* create application */

const logger = (req, res, next) => { /* application 전체에서 사용되고 있음 */
    console.log(`${req.method} ${req.url}`); /* method와 url을 console.log해주는 역할을 해줌 */
    next();
};

const privateMiddleware = (req, res, next) => { /* url 정보를 받아서 */
    const url = req.url;
    if(url === "/protected") { /* /protected와 같은 걸 확인하면 중간에 개입해서 다음 함수 호출 막음 */
        return res.send("<h1>Not Allowed<h1>")
    } 
    console.log("Allowed, you may continue."); /* url이 /protected가 아니라면 다음 함수 호출 */
    next();
};

const handleHome = (req, res) => {
    return res.send("I love middlewares.");
};

const handleProtected = (req, res) /* 모든 controller는 next를 포함하고 있지만, 마지막 함수이기 때문에 필요 없음 */ => {
    return res.send("Welcome to the private lounge.");
};

app.use(logger); /* app.use는 global middleware(어느 URL에도 작동하는 middleware)를 만들 수 있게 해줌 */
app.use(privateMiddleware);
app.get("/", handleHome); /* button.addEventListener("click", handleClick)과 동일함 */
app.get("/protected", handleProtected); /* middleware가 next를 호출하지 않으면 handle~ 함수들은 실행되지 않음 */

const handleListening = () => 
    console.log(`✅ Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
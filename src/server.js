import express from "express";

const PORT = 4000;

const app = express(); /* create application */

const handleHome = (req, res) /* (request, response) 형식 */ => {
    return res.send("<h1>I still love you.<h1>");
}

const handleLogin = (req, res) => {
    return res.send("Login here.");
}

app.get("/", handleHome); /* button.addEventListener("click", handleClick)과 동일함 */
app.get("/login", handleLogin);

const handleListening = () => 
    console.log(`✅ Server listening on port http://localhost:${PORT}🚀`);

app.listen(PORT, handleListening);
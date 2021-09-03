const path = require("path");
const http = require("http");
const express = require("express");
const WebSocket = require("ws");

const app = express();

// Setting Views to PUG
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

// Setting Public Dir
app.use("/public", express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
	res.render("home");
});

// creating a http server from Express app
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (socket) => {
	console.log(socket);
});

server.listen(3000, () => console.log("Listening at PORT : 3000"));

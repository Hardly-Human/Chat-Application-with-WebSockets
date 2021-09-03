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

const sockets = [];

wss.on("connection", (socket) => {
	sockets.push(socket);
	socket["nickname"] = "Anonymous";
	console.log("Connected to Browser ✅");

	socket.on("message", (msg) => {
		const message = JSON.parse(msg);
		switch (message.type) {
			case "nickname":
				socket.nickname = message.payload;

				break;
			case "message":
				sockets.forEach((aSocket) =>
					aSocket.send(`${socket.nickname} : ${message.payload}`)
				);

				break;
		}
	});
});

server.listen(3000, () => console.log("Listening at PORT : 3000"));

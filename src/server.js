const path = require("path");
const http = require("http");
const express = require("express");

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

server.listen(3000, () => console.log("Listening at PORT : 3000"));

const path = require("path");
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

app.listen(3000, () => console.log("Listening on PORT : 3000"));

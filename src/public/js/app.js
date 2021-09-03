const messageForm = document.querySelector(".messageForm");
const messageList = document.querySelector("ul");
const nicknameForm = document.querySelector(".nicknameForm");

const makeMessage = (type, payload) => {
	const msg = { type, payload };
	return JSON.stringify(msg);
};

const socket = new WebSocket("ws://127.0.0.1:3000");

socket.addEventListener("open", () => {
	console.log("Connected To Server ✅");
});
socket.addEventListener("message", (message) => {
	const li = document.createElement("li");
	li.innerText = message.data;
	messageList.append(li);
});
socket.addEventListener("close", () => {
	console.log("Disconnected from Server ❌");
});

messageForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const input = messageForm.querySelector("input");
	socket.send(makeMessage("message", input.value));
	input.value = "";
});

nicknameForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const input = nicknameForm.querySelector("input");
	socket.send(makeMessage("nickname", input.value));
	input.value = "";
});

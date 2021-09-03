const socket = new WebSocket("ws://127.0.0.1:3000");

socket.addEventListener("open", () => {
	console.log("Connected To Server ✅");
});
socket.addEventListener("message", (message) => {
	console.log(`Message from Server : ${message.data}`);
});
socket.addEventListener("close", () => {
	console.log("Disconnected from Server ❌");
});

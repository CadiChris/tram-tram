const WebSocket = require("ws");

// const socket = new WebSocket("ws://localhost:33290/web-socket");
const socket = new WebSocket("ws://tram-tram.herokuapp.com/web-socket");

socket.on("message", (msg) => console.log("%s", msg));

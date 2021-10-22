const WebSocket = require("ws");

const socket = new WebSocket('ws://localhost:33290');

socket.on('message', msg => console.log("%s", msg))

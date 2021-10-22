const WebSocket = require("ws");
const server = new WebSocket.Server({
  port: 33290,
});

let sockets = [];

server.on("connection", (socket) => {
  sockets.push(socket);

  // When a socket closes, or disconnects, remove it from the array.
  socket.on("close", () => {
    sockets = sockets.filter((s) => s !== socket);
  });
});

let temps = 0
setInterval(() => {
  sockets.forEach((s) => s.send(`PING ${++temps}`));
}, secondes(1));

function secondes(combien) {
  return combien * 1000;
}

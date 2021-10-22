const WebSocket = require("ws");
const { prochainPassage } = require("./prochainPassage");

const PORT = process.env.PORT || 33290;
const server = new WebSocket.Server({ port: PORT });

console.log(`PORT is ${PORT}`);

let sockets = [];

server.on("connection", (socket) => {
  sockets.push(socket);

  // When a socket closes, or disconnects, remove it from the array.
  socket.on("close", () => {
    sockets = sockets.filter((s) => s !== socket);
  });
});

const prochainPassageNow = {
  getProchainPassage: async () => {
    return "passage dans " + new Date();
  },
};

setInterval(async () => {
  await prochainPassage(sockets, prochainPassageNow);
}, secondes(1));

function secondes(combien) {
  return combien * 1000;
}

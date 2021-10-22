const WebSocket = require("ws");
const { prochainPassage } = require("./prochainPassage");

const server = new WebSocket.Server({ port: 33290 });

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

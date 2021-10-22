const express = require("express");
const WebSocket = require("ws");
const { prochainPassage } = require("./prochainPassage");

const PORT = process.env.PORT || 33290;
const server = express().listen(PORT, () =>
  console.log(`Listening on ${PORT}`)
);
const wss = new WebSocket.Server({ server });

let sockets = [];
wss.on("connection", (socket) => {
  sockets.push(socket);
  log("connected");

  // When a socket closes, or disconnects, remove it from the array.
  socket.on("close", () => {
    sockets = sockets.filter((s) => s !== socket);
    log("disconnected");
  });
});

function log(clientEvent) {
  console.log(`Client ${clientEvent}. Total clients: ${sockets.length}`);
}

const prochainPassageNow = {
  getProchainPassage: () => {
    return "passage dans " + new Date();
  },
};

setInterval(() => {
  prochainPassage(sockets, prochainPassageNow);
}, secondes(1));

function secondes(combien) {
  return combien * 1000;
}

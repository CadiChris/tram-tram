const express = require("express");
const path = require("path");
const { prochainPassage } = require("./prochainPassage");

const PORT = process.env.PORT || 33290;
const app = express();
const expressWs = require("express-ws")(app);

app
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
  })
  .ws("/", () => log("Client connected"))
  .ws("/web-socket", () => log("Client connected"))
  .listen(PORT, () => log(`Listening on ${PORT}`));

//------------------------------------

const prochainPassageNow = {
  getProchainPassage: () => `Prochain pasasge : ${new Date()}`,
};
setInterval(() => {
  prochainPassage(expressWs.getWss().clients, prochainPassageNow);
}, secondes(1));

function secondes(combien) {
  return combien * 1000;
}

function log(msg) {
  console.log(`[TRAM-TRAM] ${msg}`);
}

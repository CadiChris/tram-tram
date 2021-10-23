const express = require("express");
const path = require("path");
const { prochainPassage } = require("./prochainPassage");
const { prochainPassageAdapterTbm } = require("./prochainPassage.adapter.tbm");

const PORT = 33290;
const app = express();
const expressWs = require("express-ws")(app);

app
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
  })
  .ws("/web-socket", () => log("Client connected"))
  .listen(PORT, () => log(`Listening on ${PORT}`));

//------------------------------------

setInterval(async () => {
  await prochainPassage(expressWs.getWss().clients, prochainPassageAdapterTbm);
}, secondes(5));

function secondes(combien) {
  return combien * 1000;
}

function log(msg) {
  console.log(`[TRAM-TRAM] ${msg}`);
}

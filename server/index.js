const express = require("express");
const path = require("path");
const { prochainPassage } = require("./prochainPassage");
const {
  prochainPassageAdapterTbm,
} = require("./tbm/prochainPassage.adapter.tbm");
const { log } = require("./utils/log");
const { secondes } = require("./utils/temps");

const PORT = process.env.PORT || 33290;
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

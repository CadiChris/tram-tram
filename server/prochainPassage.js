const { log } = require("./utils/log");

async function prochainPassage(sockets, prochainPassageAdapter) {
  if (sockets.size === 0) {
    rienAFaire();
    return;
  }

  const prochain = await prochainPassageAdapter.getProchainPassage();
  log(`[Prochain Passage] Envoi des infos à ${sockets.size} clients`);
  sockets.forEach((s) => s.send(JSON.stringify(prochain)));
}

function rienAFaire() {
  log("[Prochain Passage] Aucun client, rien à faire");
}

module.exports = {
  prochainPassage,
};

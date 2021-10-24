const { log } = require("./utils/log");

async function prochainPassage(sockets, prochainPassageAdapter) {
  if (sockets.size === 0) {
    rienAFaire();
    return;
  }

  log(`[Prochain Passage] Envoi des infos à ${sockets.size} clients`);

  const prochain = await prochainPassageAdapter.getProchainPassage({
    id_arret: "T_BQF_A",
    terminus_exclus: ["Gare De Blanquefort"],
  });
  sockets.forEach((s) => s.send(JSON.stringify(prochain)));
}

function rienAFaire() {
  log("[Prochain Passage] Aucun client, rien à faire");
}

module.exports = {
  prochainPassage,
};

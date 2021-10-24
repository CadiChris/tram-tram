const { log } = require("./utils/log");

async function prochainPassage(sockets, prochainPassageAdapter) {
  if (sockets.size === 0) {
    rienAFaire();
    return;
  }

  log(`[Prochain Passage] Envoi des infos à ${sockets.size} clients`);

  const [gare_de_blanquefort, place_paul_doumer] = await Promise.all([
    getGareDeBlanquefort(prochainPassageAdapter),
    getPlacePaulDoumer(prochainPassageAdapter),
  ]);

  sockets.forEach((s) =>
    s.send(JSON.stringify({ gare_de_blanquefort, place_paul_doumer }))
  );
}

function rienAFaire() {
  log("[Prochain Passage] Aucun client, rien à faire");
}

async function getGareDeBlanquefort(prochainPassageAdapter) {
  return await prochainPassageAdapter.getProchainPassage({
    id_arret: "T_BQF_A",
    terminus_exclus: ["Gare De Blanquefort"],
  });
}

async function getPlacePaulDoumer(prochainPassageAdapter) {
  return await prochainPassageAdapter.getProchainPassage({
    id_arret: "T_DOUMER_A",
    terminus_exclus: ["Parc Des Expositions - Nouveau Stade"],
  });
}

module.exports = {
  prochainPassage,
};

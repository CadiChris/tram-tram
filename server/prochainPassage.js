async function prochainPassage(sockets, prochainPassageAdapter) {
  const prochain = await prochainPassageAdapter.getProchainPassage();
  sockets.forEach((s) => s.send(JSON.stringify(prochain)));
}

module.exports = {
  prochainPassage,
};

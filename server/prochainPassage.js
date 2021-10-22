async function prochainPassage(sockets, prochainPassageAdapter) {
  const prochain = await prochainPassageAdapter.getProchainPassage();
  sockets.forEach((s) => s.send(prochain));
}

module.exports = {
  prochainPassage
}

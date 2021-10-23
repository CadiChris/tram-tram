function prochainPassage(sockets, prochainPassageAdapter) {
  const prochain = prochainPassageAdapter.getProchainPassage();
  sockets.forEach((s) => s.send(prochain));
}

module.exports = {
  prochainPassage
}

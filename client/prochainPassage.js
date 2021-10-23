export function afficherProchainPassage(prochain, updateUi) {
  updateUi(new Date(prochain.horaire_theorique).toLocaleTimeString("fr"));
}

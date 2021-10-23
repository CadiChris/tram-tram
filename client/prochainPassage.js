export function afficherProchainPassage({ prochain, reference }, updateUi) {
  const horaire_theorique = new Date(prochain.horaire_theorique);

  const diffMinutes = getDiffMinutes(reference, horaire_theorique);
  const diffSecondes = getDiffSecondes(reference, horaire_theorique);

  const html = `
⏲ (${diffMinutes} minutes) (${diffSecondes} secondes) <br/>
⌚️ ${horaire_theorique.toLocaleTimeString("fr")}`;

  updateUi(html);
}

function getDiffMinutes(reference, horaire_theorique) {
  return Math.round(Math.abs(reference - horaire_theorique) / 1000 / 60)
    .toString()
    .padStart(2, "0");
}

function getDiffSecondes(reference, horaire_theorique) {
  return Math.round(Math.abs(reference - horaire_theorique) / 1000);
}

export function afficherProchainPassage({ prochains, reference }, updateUi) {
  const html = prochains
    .map((p) => htmlPourUnHoraire(p.horaire_theorique, reference))
    .join(" ");

  updateUi(html);
}

function htmlPourUnHoraire(unHoraire, reference) {
  const horaire_theorique = new Date(unHoraire);

  const diffMinutes = getDiffMinutes(reference, horaire_theorique);
  const diffSecondes = getDiffSecondes(reference, horaire_theorique);

  return `
<div class="un-depart">
    ⏳ ${diffMinutes} minutes (${diffSecondes} secondes) <br/>
    ⌚️ ${horaire_theorique.toLocaleTimeString("fr")}
</div>`;
}

function getDiffMinutes(reference, horaire_theorique) {
  return Math.floor(Math.abs(reference - horaire_theorique) / 1000 / 60)
    .toString()
    .padStart(2, "0");
}

function getDiffSecondes(reference, horaire_theorique) {
  return Math.round(Math.abs(reference - horaire_theorique) / 1000);
}

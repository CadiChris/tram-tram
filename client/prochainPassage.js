export function afficherProchainPassage({ prochains, reference }, updateUi) {
  const html = prochains.map((p) => htmlPourUnHoraire(p, reference)).join(" ");

  updateUi(html);
}

function htmlPourUnHoraire({ horaire_theorique, terminus }, reference) {
  const quand = new Date(horaire_theorique);

  const diffMinutes = getDiffMinutes(reference, quand);
  const diffSecondes = getDiffSecondes(reference, quand);

  return `
<div class="un-depart">
    ⏳ ${diffMinutes} minutes (${diffSecondes} secondes) <br/>
    ⌚️ ${quand.toLocaleTimeString("fr")}
     <span class="terminus">${terminus}</span>
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

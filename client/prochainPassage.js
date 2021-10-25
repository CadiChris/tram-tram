export function afficherProchainPassage(
  { prochains, reference, temps_de_marche },
  updateUi
) {
  const html = prochains
    .map((p) => htmlPourUnHoraire(p, { reference, temps_de_marche }))
    .join(" ");

  updateUi(html);
}

function htmlPourUnHoraire(
  { horaire, terminus },
  { reference, temps_de_marche }
) {
  const tram = new Date(horaire);

  const diff_minutes = getDiffMinutes(reference, tram);
  const diff_secondes = getDiffSecondes(reference, tram);
  const moment_du_depart = Number(diff_minutes) - temps_de_marche;

  return `
<div class="un-depart">
  <div class="temps-de-marche">
    ➡️ ${moment_du_depart} min. <sup>(+${temps_de_marche} min.)</sup>
  </div>
  ⏳ ${diff_minutes} minutes (${diff_secondes} secondes) <br/>
  ⌚️ <span class="secondaire">
    ${tram.toLocaleTimeString("fr")}
    <span class="terminus">${terminus}</span>
  </span>
</div>`;
}

function getDiffMinutes(reference, horaire) {
  return Math.floor(Math.abs(reference - horaire) / 1000 / 60)
    .toString()
    .padStart(2, "0");
}

function getDiffSecondes(reference, horaire) {
  return Math.round(Math.abs(reference - horaire) / 1000);
}

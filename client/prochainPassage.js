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

  const diff_avec_tram = getDiff(tram, reference);
  const moment_du_depart = getDiff(tram - enMs(temps_de_marche), reference);
  const icone = getIconeDuDepart(moment_du_depart);

  return `
<div class="un-depart">
  <div class="temps-de-marche">
    ${icone} ${moment_du_depart} <sup>(+${temps_de_marche} min.)</sup>
  </div>
  ⏳ ${diff_avec_tram} <br/>
  ⌚️ <span class="secondaire">
    ${tram.toLocaleTimeString("fr")}
    <span class="terminus">${terminus}</span>
  </span>
</div>`;
}

export function getDiff(date_a, date_b) {
  const diff_secondes = getDiffSecondes(date_a, date_b);
  const minutes = Math.floor(diff_secondes / 60);
  const secondes = diff_secondes % 60;
  const signe = date_a < date_b ? "-" : "";
  return `${signe}${deuxChiffres(minutes)} min. ${deuxChiffres(secondes)} s.`;
}

function getDiffSecondes(reference, horaire) {
  return Math.round(Math.abs(reference - horaire) / 1000);
}

function deuxChiffres(valeur) {
  return valeur.toString().padStart(2, "0");
}

function enMs(temps_minutes) {
  return temps_minutes * 60000;
}

function getIconeDuDepart(moment_du_depart) {
  return moment_du_depart.indexOf("-") !== -1 ? "❌" : "➡️";
}

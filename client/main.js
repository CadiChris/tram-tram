import { afficherProchainPassage } from "./prochainPassage.js";

const websocket_url = location.origin.replace(/^http/, "ws");
const socket = new WebSocket(`${websocket_url}/web-socket`);

socket.onmessage = (event) => {
  console.log("%s", event.data);

  const json = JSON.parse(event.data);
  const now = new Date();

  afficherProchainPassage(
    { prochains: json.gare_de_blanquefort, temps_de_marche: 6, reference: now },
    setHtml("#prochain-depart-de-blanquefort")
  );

  afficherProchainPassage(
    { prochains: json.place_paul_doumer, temps_de_marche: 13, reference: now },
    setHtml("#prochain-depart-de-paul-doumer")
  );
};

const setHtml = (selector) => (html) => {
  document.querySelector(selector).innerHTML = html;
};

import { afficherProchainPassage } from "./prochainPassage.js";

const websocket_url = location.origin.replace(/^http/, 'ws');
const socket = new WebSocket(`${websocket_url}/web-socket`);

socket.onmessage = (event) => {
  console.log("%s", event.data);

  afficherProchainPassage(
    { prochains: JSON.parse(event.data), reference: new Date() },
    (html) => {
      document.querySelector("#prochain-depart-de-blanquefort").innerHTML =
        html;
    }
  );
};

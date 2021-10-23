import { afficherProchainPassage } from "./prochainPassage.js";

const socket = new WebSocket("wss://tram-tram.herokuapp.com/web-socket");

socket.onmessage = (event) => {
  console.log("%s", event.data);

  afficherProchainPassage(
    { prochain: JSON.parse(event.data), reference: new Date() },
    (html) => {
      document.querySelector("#prochain-depart-de-blanquefort").innerHTML =
        html;
    }
  );
};

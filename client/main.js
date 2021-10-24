import { afficherProchainPassage } from "./prochainPassage.js";

const socket = new WebSocket("wss://tram-tram.herokuapp.com/web-socket");
// const socket = new WebSocket("ws://localhost:33290/web-socket");

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

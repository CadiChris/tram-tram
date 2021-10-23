import { afficherProchainPassage } from "./prochainPassage.js";

const socket = new WebSocket("wss://tram-tram.herokuapp.com/web-socket");

socket.onmessage = (event) => {
  console.log("%s", event.data);

  afficherProchainPassage(JSON.parse(event.data), (html) => {
    document.querySelector("#prochain-depart-de-blanquefort").innerHTML = html;
  });
};

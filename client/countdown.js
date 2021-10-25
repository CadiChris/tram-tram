import { setHtml } from "./setHtml.js";

export const countdown = {
  interval: null,
  start() {
    if (this.interval !== null) clearInterval(this.interval);

    setHtml("#countdown")(5);
    let countdown = 4;
    this.interval = setInterval(() => {
      setHtml("#countdown")(countdown);
      countdown--;
    }, 1000);
  },
};

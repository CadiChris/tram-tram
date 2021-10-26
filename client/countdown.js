export const countdown = {
  interval: null,
  start() {
    if (this.interval !== null) clearInterval(this.interval);

    showProgress(5 * 20);

    let countdown = 4;
    this.interval = setInterval(() => {
      showProgress(countdown * 20);
      countdown--;
    }, 1000);
  },
};

function showProgress(value) {
  document.querySelector("progress").setAttribute("value", value);
}

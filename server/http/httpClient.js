const got = require("got");

const httpClient = {
  async get(url) {
    return got.get(url, { encoding: "latin1" }).text();
  },
};

module.exports = {
  httpClient,
};

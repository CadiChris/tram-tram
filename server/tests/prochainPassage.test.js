const { prochainPassage } = require("../prochainPassage");

describe("Prochain passage", () => {
  it("envoi aux sockets le prochain passage renvoyé par l'adapter", async () => {
    const socket = { send: jest.fn() };

    const prochainPassageInMemory = {
      getProchainPassage: async () => "X",
    };

    await prochainPassage([socket], prochainPassageInMemory);

    expect(socket.send).toHaveBeenCalledWith("X");
  });
});


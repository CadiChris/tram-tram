const { prochainPassage } = require("../prochainPassage");

describe("Prochain passage", () => {
  it("envoi aux sockets le prochain passage renvoyé par l'adapter", async () => {
    const socket = { send: jest.fn() };

    const prochainPassageInMemory = {
      getProchainPassage: async () => [
        { horaire_theorique: "2021-10-23T20:57:19" },
      ],
    };

    await prochainPassage(new Set([socket]), prochainPassageInMemory);

    expect(socket.send).toHaveBeenCalledWith(
      "[{\"horaire_theorique\":\"2021-10-23T20:57:19\"}]"
    );
  });

  it("ne fait rien si la liste des sockets est vide", async () => {
    const prochainPassageInMemory = { getProchainPassage: jest.fn() };

    await prochainPassage(new Set(), prochainPassageInMemory);

    expect(prochainPassageInMemory.getProchainPassage).not.toHaveBeenCalled();
  });
});

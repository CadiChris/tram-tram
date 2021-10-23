const { afficherProchainPassage } = require("../prochainPassage");

describe("Affichage du prochain passage", () => {
  it("affiche l'heure du prochain passage", () => {
    const prochain = { horaire_theorique: "2021-10-23T23:49:03" };
    const updateUi = jest.fn();

    afficherProchainPassage(prochain, updateUi);

    expect(updateUi).toHaveBeenCalledWith("23:49:03");
  });
});

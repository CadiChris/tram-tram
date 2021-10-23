const { afficherProchainPassage } = require("../prochainPassage");

describe("Affichage du prochain passage", () => {
  it("affiche l'heure du prochain passage", () => {
    const prochain = { horaire_theorique: "2021-10-23T23:49:03" };
    const updateUi = jest.fn();

    afficherProchainPassage({ prochain }, updateUi);

    assertAffichage("23:49:03", updateUi)
  });

  it("affiche dans combien de minutes est le départ", () => {
    const prochain = { horaire_theorique: "2021-10-23T15:04:00" };
    const updateUi = jest.fn();

    afficherProchainPassage({ prochain, reference: new Date("2021-10-23T15:00:00") }, updateUi);

    assertAffichage("(04 minutes)", updateUi)
  });

  it("affiche dans combien de secondes est le départ", () => {
    const prochain = { horaire_theorique: "2021-10-23T15:01:31" };
    const updateUi = jest.fn();

    afficherProchainPassage({ prochain, reference: new Date("2021-10-23T15:00:00") }, updateUi);

    assertAffichage("(91 secondes)", updateUi)
  });
});

function assertAffichage(expected, updateUi) {
  expect(updateUi.mock.calls[0][0]).toContain(expected)
}

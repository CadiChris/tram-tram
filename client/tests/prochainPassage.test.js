const { afficherProchainPassage } = require("../prochainPassage");

describe("Affichage du prochain passage", () => {
  const arret_de_test = {
    prochains: [
      { horaire_theorique: "2021-10-23T15:02:31", terminus: "Gare De Begles" },
      { horaire_theorique: "2021-10-23T15:06:00", terminus: "Porte De B." },
    ],
    reference: new Date("2021-10-23T15:00:00"),
    temps_de_marche: 1
  };

  it("affiche l'heure du prochain passage", () => {
    const updateUi = jest.fn();

    afficherProchainPassage(arret_de_test, updateUi);

    assertAffichage("15:02:31", updateUi);
    assertAffichage("Gare De Begles", updateUi);
    assertAffichage("15:06:00", updateUi);
    assertAffichage("Porte De B.", updateUi);
  });

  it("affiche dans combien de temps est le départ", () => {
    const updateUi = jest.fn();

    afficherProchainPassage(arret_de_test, updateUi);

    assertAffichage("02 minutes (151 secondes)", updateUi);
    assertAffichage("06 minutes (360 secondes)", updateUi);
  });

  it("affiche un conseil pour l'heure de mise en route", () => {
    const updateUi = jest.fn();

    afficherProchainPassage(arret_de_test, updateUi);

    assertAffichage("(+1 min.)", updateUi);
    assertAffichage("1 min.", updateUi);
  });
});

function assertAffichage(expected, updateUi) {
  expect(updateUi.mock.calls[0][0]).toContain(expected);
}

const { afficherProchainPassage, getDiff } = require("../prochainPassage");

describe("Affichage du prochain passage", () => {
  const arret_de_test = {
    prochains: [
      { horaire: "2021-10-23T15:02:31", terminus: "Gare De Begles" },
      { horaire: "2021-10-23T15:06:00", terminus: "Porte De B." },
      { horaire: "2021-10-23T14:59:40", terminus: "Gare De Begles" },
    ],
    reference: new Date("2021-10-23T15:00:00"),
    temps_de_marche: 1,
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

    assertAffichage("⏳ 02 min. 31 s.", updateUi);
    assertAffichage("⏳ 06 min. 00 s.", updateUi);
  });

  it("affiche un conseil pour l'heure de mise en route", () => {
    const updateUi = jest.fn();

    afficherProchainPassage(arret_de_test, updateUi);

    assertAffichage("(1 min.)", updateUi);
    assertAffichage("➡️ 01 min. 31 s.", updateUi);
  });

  it("affiche un icone spécial pour les départs manqués", () => {
    const updateUi = jest.fn();

    afficherProchainPassage(arret_de_test, updateUi);

    assertAffichage("❌ -01 min. 20 s.", updateUi);
  });
});

describe("Différence entre 2 horaires", () => {
  it("met un 'moins' devant la différence si l'horaire est dépassée", () => {
    expect(
      getDiff(new Date("2021-10-23T15:00:00"), new Date("2021-10-23T15:05:00"))
    ).toBe("-05 min. 00 s.");
    expect(
      getDiff(new Date("2021-10-23T15:05:00"), new Date("2021-10-23T15:00:00"))
    ).toBe("05 min. 00 s.");
  });
});

function assertAffichage(expected, updateUi) {
  expect(updateUi.mock.calls[0][0]).toContain(expected);
}

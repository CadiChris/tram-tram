const { afficherProchainPassage } = require("../prochainPassage");

describe("Affichage du prochain passage", () => {
  it("affiche l'heure du prochain passage", () => {
    const updateUi = jest.fn();

    afficherProchainPassage(
      { prochains: [
          { horaire_theorique: "2021-10-23T23:49:03" },
          { horaire_theorique: "2021-10-23T23:55:30" },
        ] },
      updateUi
    );

    assertAffichage("23:49:03", updateUi);
    assertAffichage("23:55:30", updateUi);
  });

  it("affiche dans combien de temps est le départ", () => {
    const updateUi = jest.fn();

    afficherProchainPassage(
      {
        prochains: [
            { horaire_theorique: "2021-10-23T15:02:31" },
            { horaire_theorique: "2021-10-23T15:06:00" },
        ],
        reference: new Date("2021-10-23T15:00:00"),
      },
      updateUi
    );

    assertAffichage("02 minutes (151 secondes)", updateUi);
    assertAffichage("06 minutes (360 secondes)", updateUi);
  });
});

function assertAffichage(expected, updateUi) {
  expect(updateUi.mock.calls[0][0]).toContain(expected);
}

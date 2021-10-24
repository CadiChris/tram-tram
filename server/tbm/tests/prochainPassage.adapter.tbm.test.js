const { promises: fs } = require("fs");
const path = require("path");
const { prochainPassageAdapterTbm } = require("../prochainPassage.adapter.tbm");

describe("Adapter du prochain passage sur TBM", () => {
  it("appelle l'API TBM pour la Gare de Blanquefort", async () => {
    const httpMock = {
      get: jest.fn(async () => await xmlDuProchainPassage()),
    };

    await prochainPassageAdapterTbm.getProchainPassage({ http: httpMock });

    expect(httpMock.get).toHaveBeenCalledWith(
      "https://data.bordeaux-metropole.fr/wps?key=258BILMNYZ&service=WPS&version=1.0.0&request=Execute&Identifier=saeiv_arret_passages&DataInputs=ARRET_ID=T_BQF_A"
    );
  });

  it("renvoie les horaires des prochains passages qui *partent* de Blanquefort", async () => {
    const httpMock = {
      get: jest.fn(async () => await xmlDuProchainPassage()),
    };

    const prochain = await prochainPassageAdapterTbm.getProchainPassage({
      http: httpMock,
    });

    expect(prochain).toEqual([
        { horaire_theorique: "2021-10-23T21:05:25" },
        { horaire_theorique: "2021-10-23T21:11:43" },
        { horaire_theorique: "2021-10-23T21:24:28" },
    ]);
  });
});

async function xmlDuProchainPassage() {
  const fichier = path.join(
    __dirname,
    "./data/prochain_passages_gare_de_blanquefort.xml"
  );
  return await fs.readFile(fichier);
}

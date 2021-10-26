const { promises: fs } = require("fs");
const path = require("path");
const { prochainPassageAdapterTbm } = require("../prochainPassage.adapter.tbm");

describe("Adapter du prochain passage sur TBM", () => {
  it("appelle l'API TBM pour l'arrêt en paramètre", async () => {
    const httpMock = {
      get: jest.fn(async () => await xmlGareDeBlanquefort()),
    };

    await prochainPassageAdapterTbm.getProchainPassage(
      { id_arret: "T_BQF_A", terminus_exclus: [] },
      { http: httpMock }
    );

    expect(httpMock.get).toHaveBeenCalledWith(
      "https://data.bordeaux-metropole.fr/wps?key=258BILMNYZ&service=WPS&version=1.0.0&request=Execute&Identifier=saeiv_arret_passages&DataInputs=ARRET_ID=T_BQF_A"
    );
  });

  it("renvoie les horaires qui ne *vont pas* vers les terminus exclus", async () => {
    const httpMock = {
      get: jest.fn(async () => await xmlGareDeBlanquefort()),
    };

    const prochain = await prochainPassageAdapterTbm.getProchainPassage(
      { id_arret: "", terminus_exclus: ["Gare De Blanquefort"] },
      { http: httpMock }
    );

    expect(prochain).toEqual([
      { horaire: "2021-10-23T21:05:25", terminus: "Gare De Begles" },
      { horaire: "2021-10-23T21:11:43", terminus: "Porte De Bourgogne" },
      { horaire: "2021-10-23T21:24:28", terminus: "Gare De Begles" },
    ]);
  });

  it("ne crashe pas s'il n'y a aucun passage prévu", async () => {
    const httpMock = {
      get: jest.fn(async () => await xmlAucunPassage()),
    };

    const prochain = await prochainPassageAdapterTbm.getProchainPassage(
        { id_arret: "", terminus_exclus: ["Gare De Blanquefort"] },
        { http: httpMock }
    );

    expect(prochain).toEqual([])
  });
});

async function xmlGareDeBlanquefort() {
  return await xmlDeTest("prochain_passages_gare_de_blanquefort.xml");
}

async function xmlAucunPassage() {
  return await xmlDeTest("prochains_passages_aucun_passage.xml");
}

async function xmlDeTest(fichier) {
  return await fs.readFile(path.join(__dirname, "./data", fichier));
}

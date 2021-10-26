const { promises: fs } = require("fs");
const path = require("path");
const { prochainPassageAdapterTbm } = require("../prochainPassage.adapter.tbm");
const { env } = require("../../env");

describe("Adapter du prochain passage sur TBM", () => {
  it("appelle l'API TBM pour l'arrêt en paramètre", async () => {
    const _cle_api = env.CLE_API_TBM;
    env.CLE_API_TBM = "CLE_API";

    try {
      const httpMock = {
        get: jest.fn(async () => await xmlGareDeBlanquefort()),
      };

      await prochainPassageAdapterTbm.getProchainPassage(
        { ids_arrets: ["T_BQF_A"], terminus_exclus: [] },
        { http: httpMock }
      );

      expect(httpMock.get).toHaveBeenCalledWith(
        "https://data.bordeaux-metropole.fr/wps?key=CLE_API&service=WPS&version=1.0.0&request=Execute&Identifier=saeiv_arret_passages&DataInputs=ARRET_ID=T_BQF_A"
      );
    } finally {
      env.CLE_API_TBM = _cle_api;
    }
  });

  it("renvoie les horaires qui ne *vont pas* vers les terminus exclus", async () => {
    const httpMock = {
      get: jest.fn(async () => await xmlGareDeBlanquefort()),
    };

    const prochain = await prochainPassageAdapterTbm.getProchainPassage(
      { ids_arrets: ["T_BQF_A"], terminus_exclus: ["Gare De Blanquefort"] },
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
      { ids_arrets: [], terminus_exclus: ["Gare De Blanquefort"] },
      { http: httpMock }
    );

    expect(prochain).toEqual([]);
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

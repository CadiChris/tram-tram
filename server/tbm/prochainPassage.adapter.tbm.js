const xml2js = require("xml2js");
const { httpClient } = require("../http/httpClient");

const prochainPassageAdapterTbm = {
  async getProchainPassage({ http } = { http: httpClient }) {
    const xml = await http.get(
      "https://data.bordeaux-metropole.fr/wps?key=258BILMNYZ&service=WPS&version=1.0.0&request=Execute&Identifier=saeiv_arret_passages&DataInputs=ARRET_ID=T_BQF_A"
    );

    const obj = await xml2js.parseStringPromise(xml);
    const horaire_theorique =
      obj["wps:ExecuteResponse"]["wps:ProcessOutputs"][0]["wps:Output"][0][
        "wps:Data"
      ][0]["wps:ComplexData"][0]["gml:featureMember"][0]["bm:HORAIRE"][0][
        "bm:HOR_THEO"
      ][0];
    return [{ horaire_theorique }];
  },
};

module.exports = {
  prochainPassageAdapterTbm,
};

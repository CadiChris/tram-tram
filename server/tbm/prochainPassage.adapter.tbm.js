const xml2js = require("xml2js");
const { httpClient } = require("../http/httpClient");

const prochainPassageAdapterTbm = {
  async getProchainPassage({ http } = { http: httpClient }) {
    const xml = await http.get(
      "https://data.bordeaux-metropole.fr/wps?key=258BILMNYZ&service=WPS&version=1.0.0&request=Execute&Identifier=saeiv_arret_passages&DataInputs=ARRET_ID=T_BQF_A"
    );

    const xmlAsObject = await xml2js.parseStringPromise(xml);
    const entrees = get_wpsOutputs(xmlAsObject);

    return entrees
      .map((e) => get_bmHORAIRE(e))
      .filter((h) => h["bm:TERMINUS"][0] !== "Gare De Blanquefort")
      .map((h) => ({ horaire_theorique: h["bm:HOR_THEO"][0] }));
  },
};

function get_wpsOutputs(xmlAsObject) {
  return xmlAsObject["wps:ExecuteResponse"]["wps:ProcessOutputs"][0][
    "wps:Output"
  ];
}

function get_bmHORAIRE(wpsOutputObject) {
  return wpsOutputObject["wps:Data"][0]["wps:ComplexData"][0][
    "gml:featureMember"
  ][0]["bm:HORAIRE"][0];
}

module.exports = {
  prochainPassageAdapterTbm,
};

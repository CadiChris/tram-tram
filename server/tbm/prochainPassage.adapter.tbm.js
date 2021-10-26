const xml2js = require("xml2js");
const { httpClient } = require("../http/httpClient");

const prochainPassageAdapterTbm = {
  async getProchainPassage(
    { ids_arrets, terminus_exclus },
    { http } = { http: httpClient }
  ) {
    const fetchEnParallele = Promise.all(
      ids_arrets.map((id_arret) => getEntrees(id_arret, http))
    );

    return (await fetchEnParallele)
      .flat()
      .map((e) => get_bmHORAIRE(e))
      .filter((h) => !terminus_exclus.includes(h["bm:TERMINUS"][0]))
      .map((h) => ({
        horaire: h["bm:HOR_APP"][0],
        terminus: h["bm:TERMINUS"][0],
      }));
  },
};

async function getEntrees(id_arret, http) {
  const xml = await http.get(urlProchainPassagePour(id_arret));
  const xmlAsObject = await xml2js.parseStringPromise(xml);
  return get_wpsOutputs(xmlAsObject);
}

function urlProchainPassagePour(id_arret) {
  return `https://data.bordeaux-metropole.fr/wps?key=258BILMNYZ&service=WPS&version=1.0.0&request=Execute&Identifier=saeiv_arret_passages&DataInputs=ARRET_ID=${id_arret}`;
}

function get_wpsOutputs(xmlAsObject) {
  const wpsProcessOutputs =
    xmlAsObject["wps:ExecuteResponse"]["wps:ProcessOutputs"][0];
  return wpsProcessOutputs["wps:Output"] || [];
}

function get_bmHORAIRE(wpsOutputObject) {
  return wpsOutputObject["wps:Data"][0]["wps:ComplexData"][0][
    "gml:featureMember"
  ][0]["bm:HORAIRE"][0];
}

module.exports = {
  prochainPassageAdapterTbm,
};

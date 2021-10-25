# TRAM-TRAM

### API Bordeaux Métropole

https://opendata.bordeaux-metropole.fr/explore/

#### Arrêt physique sur le réseau SAEIV

- https://opendata.bordeaux-metropole.fr/explore/dataset/sv_arret_p/webservices/

> `GET https://data.bordeaux-metropole.fr/wfs?key=258BILMNYZ&REQUEST=GetFeature&SERVICE=WFS&VERSION=1.1.0&TYPENAME=bm:SV_ARRET_P`

#### Prochains passage à un arrêt

- https://opendata.bordeaux-metropole.fr/explore/dataset/sv_horai_a/information/

#### Arrêt Gare de Blanquefort

```xml

<bm:SV_ARRET_P gml:id="SV_ARRET_P.128128">
    <gml:boundedBy>
        <gml:Envelope srsName="EPSG:3945">
            <gml:lowerCorner>1413999.960000 4197150.960500</gml:lowerCorner>
            <gml:upperCorner>1413999.960000 4197150.960500</gml:upperCorner>
        </gml:Envelope>
    </gml:boundedBy>
    <bm:geometry>
        <gml:Point srsName="EPSG:3945">
            <gml:pos>1413999.960000 4197150.960500</gml:pos>
        </gml:Point>
    </bm:geometry>
    <bm:GID>128128</bm:GID>
    <bm:GEOM_O>0</bm:GEOM_O>
    <bm:IDENT>T_BQF_A</bm:IDENT>
    <bm:NUMERO>7719</bm:NUMERO>
    <bm:GROUPE>T_BQF</bm:GROUPE>
    <bm:NUMORDRE>1</bm:NUMORDRE>
    <bm:LIBELLE>Gare De Blanquefort</bm:LIBELLE>
    <bm:VEHICULE>TRAM</bm:VEHICULE>
    <bm:TYPE>CLASSIQUE</bm:TYPE>
    <bm:ACTIF>1</bm:ACTIF>
    <bm:VOIRIE>QUAI</bm:VOIRIE>
    <bm:INSEE>33056</bm:INSEE>
    <bm:SOURCE>SAEIV_TRAM</bm:SOURCE>
    <bm:CDATE>2016-12-17 00:00:00</bm:CDATE>
    <bm:MDATE>2016-12-17 00:00:00</bm:MDATE>
</bm:SV_ARRET_P>
```

```xml

<bm:SV_ARRET_P gml:id="SV_ARRET_P.128129">
    <gml:boundedBy>
        <gml:Envelope srsName="EPSG:3945">
            <gml:lowerCorner>1413993.129600 4197149.760400</gml:lowerCorner>
            <gml:upperCorner>1413993.129600 4197149.760400</gml:upperCorner>
        </gml:Envelope>
    </gml:boundedBy>
    <bm:geometry>
        <gml:Point srsName="EPSG:3945">
            <gml:pos>1413993.129600 4197149.760400</gml:pos>
        </gml:Point>
    </bm:geometry>
    <bm:GID>128129</bm:GID>
    <bm:GEOM_O>0</bm:GEOM_O>
    <bm:IDENT>T_BQF_R</bm:IDENT>
    <bm:NUMERO>7720</bm:NUMERO>
    <bm:GROUPE>T_BQF</bm:GROUPE>
    <bm:NUMORDRE>2</bm:NUMORDRE>
    <bm:LIBELLE>Gare De Blanquefort</bm:LIBELLE>
    <bm:VEHICULE>TRAM</bm:VEHICULE>
    <bm:TYPE>CLASSIQUE</bm:TYPE>
    <bm:ACTIF>1</bm:ACTIF>
    <bm:VOIRIE>QUAI</bm:VOIRIE>
    <bm:INSEE>33056</bm:INSEE>
    <bm:SOURCE>SAEIV_TRAM</bm:SOURCE>
    <bm:CDATE>2016-12-17 00:00:00</bm:CDATE>
    <bm:MDATE>2016-12-17 00:00:00</bm:MDATE>
</bm:SV_ARRET_P>

```

Prochains passages à Gare de Blanquefort

```
GET https://data.bordeaux-metropole.fr/wps?key=258BILMNYZ&service=WPS&version=1.0.0&request=Execute&Identifier=saeiv_arret_passages&DataInputs=ARRET_ID=T_BQF_A
GET https://data.bordeaux-metropole.fr/wps?key=258BILMNYZ&service=WPS&version=1.0.0&request=Execute&Identifier=saeiv_arret_passages&DataInputs=ARRET_ID=T_BQF_R
```

#### Arrêt Place Paul Doumer

```xml

<bm:SV_ARRET_P gml:id="SV_ARRET_P.128039">
    <gml:boundedBy>
        <gml:Envelope srsName="EPSG:3945">
            <gml:lowerCorner>1417585.083900 4189780.232700</gml:lowerCorner>
            <gml:upperCorner>1417585.083900 4189780.232700</gml:upperCorner>
        </gml:Envelope>
    </gml:boundedBy>
    <bm:geometry>
        <gml:Point srsName="EPSG:3945">
            <gml:pos>1417585.083900 4189780.232700</gml:pos>
        </gml:Point>
    </bm:geometry>
    <bm:GID>128039</bm:GID>
    <bm:GEOM_O>0</bm:GEOM_O>
    <bm:IDENT>T_DOUMER_A</bm:IDENT>
    <bm:NUMERO>5396</bm:NUMERO>
    <bm:GROUPE>T_DOUMER</bm:GROUPE>
    <bm:NUMORDRE>1</bm:NUMORDRE>
    <bm:LIBELLE>Place Paul Doumer</bm:LIBELLE>
    <bm:VEHICULE>TRAM</bm:VEHICULE>
    <bm:TYPE>CLASSIQUE</bm:TYPE>
    <bm:ACTIF>1</bm:ACTIF>
    <bm:VOIRIE>AUTRE</bm:VOIRIE>
    <bm:INSEE>33063</bm:INSEE>
    <bm:SOURCE>SAEIV_TRAM</bm:SOURCE>
    <bm:CDATE>2007-11-19 00:00:00</bm:CDATE>
    <bm:MDATE>2007-11-19 00:00:00</bm:MDATE>
</bm:SV_ARRET_P>
```

```xml

<bm:SV_ARRET_P gml:id="SV_ARRET_P.128040">
    <gml:boundedBy>
        <gml:Envelope srsName="EPSG:3945">
            <gml:lowerCorner>1417582.927300 4189772.631700</gml:lowerCorner>
            <gml:upperCorner>1417582.927300 4189772.631700</gml:upperCorner>
        </gml:Envelope>
    </gml:boundedBy>
    <bm:geometry>
        <gml:Point srsName="EPSG:3945">
            <gml:pos>1417582.927300 4189772.631700</gml:pos>
        </gml:Point>
    </bm:geometry>
    <bm:GID>128040</bm:GID>
    <bm:GEOM_O>0</bm:GEOM_O>
    <bm:IDENT>T_DOUMER_R</bm:IDENT>
    <bm:NUMERO>5397</bm:NUMERO>
    <bm:GROUPE>T_DOUMER</bm:GROUPE>
    <bm:NUMORDRE>2</bm:NUMORDRE>
    <bm:LIBELLE>Place Paul Doumer</bm:LIBELLE>
    <bm:VEHICULE>TRAM</bm:VEHICULE>
    <bm:TYPE>CLASSIQUE</bm:TYPE>
    <bm:ACTIF>1</bm:ACTIF>
    <bm:VOIRIE>AUTRE</bm:VOIRIE>
    <bm:INSEE>33063</bm:INSEE>
    <bm:SOURCE>SAEIV_TRAM</bm:SOURCE>
    <bm:CDATE>2007-11-19 00:00:00</bm:CDATE>
    <bm:MDATE>2007-11-19 00:00:00</bm:MDATE>
</bm:SV_ARRET_P>
```

```
GET https://data.bordeaux-metropole.fr/wps?key=258BILMNYZ&service=WPS&version=1.0.0&request=Execute&Identifier=saeiv_arret_passages&DataInputs=ARRET_ID=T_DOUMER_A
GET https://data.bordeaux-metropole.fr/wps?key=258BILMNYZ&service=WPS&version=1.0.0&request=Execute&Identifier=saeiv_arret_passages&DataInputs=ARRET_ID=T_DOUMER_R
```

const dataUrl = "https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=63"

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const regSport = / \([A-Z]{3}[A-Z]?\)/

const geojsonFeatures = [
    {
        "type": "Feature",
        "properties": {
            "name": "Pont Alexandre III",
            "category": "venue-paralympic",
            "sports": [
                "Para Triathlon "
            ],
            "startDate": "2024-09-01",
            "endDate": "2024-09-02",
            "lat": 48.8637,
            "lon": 2.3134,
            "popupContent": "\n                    <b>Pont Alexandre III</b><br aria-hidden=\"true\">\n                    Coordonnées (2.3134, 48.8637)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para Triathlon <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-09-01 au 2024-09-02\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.3134,
                48.8637
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Bercy",
            "category": "venue-paralympic",
            "sports": [
                "Basketball fauteuil "
            ],
            "startDate": "2024-08-29",
            "endDate": "2024-09-08",
            "lat": 48.83863,
            "lon": 2.378597,
            "popupContent": "\n                    <b>Arena Bercy</b><br aria-hidden=\"true\">\n                    Coordonnées (2.378597, 48.83863)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Basketball fauteuil <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-29 au 2024-09-08\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.378597,
                48.83863
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade de Bordeaux",
            "category": "venue-olympic",
            "sports": [
                "Football "
            ],
            "startDate": "2024-07-24",
            "endDate": "2024-08-02",
            "lat": 44.8974,
            "lon": -0.5616,
            "popupContent": "\n                    <b>Stade de Bordeaux</b><br aria-hidden=\"true\">\n                    Coordonnées (-0.5616, 44.8974)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Football <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-24 au 2024-08-02\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -0.5616,
                44.8974
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade Tour Eiffel",
            "category": "venue-olympic",
            "sports": [
                "Volley-ball de plage "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-10",
            "lat": 48.85613,
            "lon": 2.2978,
            "popupContent": "\n                    <b>Stade Tour Eiffel</b><br aria-hidden=\"true\">\n                    Coordonnées (2.2978, 48.85613)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Volley-ball de plage <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.2978,
                48.85613
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Grand Palais",
            "category": "venue-paralympic",
            "sports": [
                "Escrime fauteuil ",
                " Para Taekwondo "
            ],
            "startDate": "2024-08-29",
            "endDate": "2024-09-07",
            "lat": 48.86616355,
            "lon": 2.3125474,
            "popupContent": "\n                    <b>Grand Palais</b><br aria-hidden=\"true\">\n                    Coordonnées (2.3125474, 48.86616355)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Escrime fauteuil <br aria-hidden=\"true\"> Para Taekwondo <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-29 au 2024-09-07\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.3125474,
                48.86616355
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Invalides",
            "category": "venue-olympic",
            "sports": [
                "Athlétisme - arrivée Marathon ",
                " Cyclisme sur route - départ Contre-la-montre ",
                " Tir à l'arc "
            ],
            "startDate": "2024-07-25",
            "endDate": "2024-08-11",
            "lat": 48.85704803,
            "lon": 2.312835932,
            "popupContent": "\n                    <b>Invalides</b><br aria-hidden=\"true\">\n                    Coordonnées (2.312835932, 48.85704803)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Athlétisme - arrivée Marathon <br aria-hidden=\"true\"> Cyclisme sur route - départ Contre-la-montre <br aria-hidden=\"true\"> Tir à l'arc <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-25 au 2024-08-11\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.312835932,
                48.85704803
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Site d’escalade du Bourget",
            "category": "venue-olympic",
            "sports": [
                "Escalade "
            ],
            "startDate": "2024-08-05",
            "endDate": "2024-08-10",
            "lat": 48.93693402,
            "lon": 2.41997931,
            "popupContent": "\n                    <b>Site d’escalade du Bourget</b><br aria-hidden=\"true\">\n                    Coordonnées (2.41997931, 48.93693402)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Escalade <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-05 au 2024-08-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.41997931,
                48.93693402
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "La Concorde 4",
            "category": "venue-olympic",
            "sports": [
                "Skateboard "
            ],
            "startDate": "2024-08-06",
            "endDate": "2024-08-07",
            "lat": 48.86573765,
            "lon": 2.3220383,
            "popupContent": "\n                    <b>La Concorde 4</b><br aria-hidden=\"true\">\n                    Coordonnées (2.3220383, 48.86573765)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Skateboard <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-06 au 2024-08-07\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.3220383,
                48.86573765
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "La Concorde",
            "category": "venue-olympic",
            "sports": [
                "Parc Urbain la Concorde "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-10",
            "lat": 48.86570357457259,
            "lon": 2.321214226315764,
            "popupContent": "\n                    <b>La Concorde</b><br aria-hidden=\"true\">\n                    Coordonnées (2.321214226315764, 48.86570357457259)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Parc Urbain la Concorde <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.321214226315764,
                48.86570357457259
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "La Concorde",
            "category": "venue-paralympic",
            "sports": [
                "Cérémonie d'ouverture Paralympique "
            ],
            "startDate": "2024-09-08",
            "endDate": "2024-09-08",
            "lat": 48.86570357457259,
            "lon": 2.321214226315764,
            "popupContent": "\n                    <b>La Concorde</b><br aria-hidden=\"true\">\n                    Coordonnées (2.321214226315764, 48.86570357457259)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Cérémonie d'ouverture Paralympique <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-09-08 au 2024-09-08\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.321214226315764,
                48.86570357457259
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Golf National",
            "category": "venue-olympic",
            "sports": [
                "Golf "
            ],
            "startDate": "2024-09-01",
            "endDate": "2024-09-10",
            "lat": 48.7532,
            "lon": 2.0758,
            "popupContent": "\n                    <b>Golf National</b><br aria-hidden=\"true\">\n                    Coordonnées (2.0758, 48.7532)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Golf <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-09-01 au 2024-09-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.0758,
                48.7532
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade Pierre Mauroy",
            "category": "venue-olympic",
            "sports": [
                "Basketball ",
                " Handball "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-11",
            "lat": 50.61190661,
            "lon": 3.13047318,
            "popupContent": "\n                    <b>Stade Pierre Mauroy</b><br aria-hidden=\"true\">\n                    Coordonnées (3.13047318, 50.61190661)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Basketball <br aria-hidden=\"true\"> Handball <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-11\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                3.13047318,
                50.61190661
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade de Nice",
            "category": "venue-olympic",
            "sports": [
                "Football "
            ],
            "startDate": "2024-07-24",
            "endDate": "2024-07-31",
            "lat": 43.7051,
            "lon": 7.1926,
            "popupContent": "\n                    <b>Stade de Nice</b><br aria-hidden=\"true\">\n                    Coordonnées (7.1926, 43.7051)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Football <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-24 au 2024-07-31\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                7.1926,
                43.7051
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Paris Sud 4",
            "category": "venue-olympic",
            "sports": [
                "Tennis de table "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-10",
            "lat": 48.830184,
            "lon": 2.289033,
            "popupContent": "\n                    <b>Arena Paris Sud 4</b><br aria-hidden=\"true\">\n                    Coordonnées (2.289033, 48.830184)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Tennis de table <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.289033,
                48.830184
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Paris Sud 4",
            "category": "venue-paralympic",
            "sports": [
                "Tennis de table para "
            ],
            "startDate": "2024-08-29",
            "endDate": "2024-09-07",
            "lat": 48.830184,
            "lon": 2.289033,
            "popupContent": "\n                    <b>Arena Paris Sud 4</b><br aria-hidden=\"true\">\n                    Coordonnées (2.289033, 48.830184)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Tennis de table para <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-29 au 2024-09-07\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.289033,
                48.830184
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Paris Sud 6",
            "category": "venue-olympic",
            "sports": [
                "Handball ",
                " Haltérophilie "
            ],
            "startDate": "2024-07-25",
            "endDate": "2024-08-11",
            "lat": 48.829381,
            "lon": 2.290865,
            "popupContent": "\n                    <b>Arena Paris Sud 6</b><br aria-hidden=\"true\">\n                    Coordonnées (2.290865, 48.829381)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Handball <br aria-hidden=\"true\"> Haltérophilie <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-25 au 2024-08-11\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.290865,
                48.829381
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade de France",
            "category": "venue-paralympic",
            "sports": [
                "Para Athlétisme ",
                " Cérémonie de clôture Paralympique "
            ],
            "startDate": "2024-08-30",
            "endDate": "2024-09-08",
            "lat": 48.924475,
            "lon": 2.360127,
            "popupContent": "\n                    <b>Stade de France</b><br aria-hidden=\"true\">\n                    Coordonnées (2.360127, 48.924475)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para Athlétisme <br aria-hidden=\"true\"> Cérémonie de clôture Paralympique <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-30 au 2024-09-08\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.360127,
                48.924475
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade Geoffroy-Guichard",
            "category": "venue-olympic",
            "sports": [
                "Football "
            ],
            "startDate": "2024-07-24",
            "endDate": "2024-07-31",
            "lat": 45.4607,
            "lon": 4.3902,
            "popupContent": "\n                    <b>Stade Geoffroy-Guichard</b><br aria-hidden=\"true\">\n                    Coordonnées (4.3902, 45.4607)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Football <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-24 au 2024-07-31\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                4.3902,
                45.4607
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade nautique de Vaires-sur-Marne - bassin d'eaux calmes",
            "category": "venue-olympic",
            "sports": [
                "Aviron ",
                " Canoë - course en ligne "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-10",
            "lat": 48.8623,
            "lon": 2.6348,
            "popupContent": "\n                    <b>Stade nautique de Vaires-sur-Marne - bassin d'eaux calmes</b><br aria-hidden=\"true\">\n                    Coordonnées (2.6348, 48.8623)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Aviron <br aria-hidden=\"true\"> Canoë - course en ligne <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.6348,
                48.8623
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade Yves-du-Manoir",
            "category": "venue-olympic",
            "sports": [
                "Hockey "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-09",
            "lat": 48.92934371,
            "lon": 2.24777122,
            "popupContent": "\n                    <b>Stade Yves-du-Manoir</b><br aria-hidden=\"true\">\n                    Coordonnées (2.24777122, 48.92934371)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Hockey <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-09\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.24777122,
                48.92934371
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Pont Alexandre III",
            "category": "venue-olympic",
            "sports": [
                "Cyclisme sur route - arrivée Contre-la-montre ",
                " Natation marathon ",
                " Triathlon "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-09",
            "lat": 48.8637,
            "lon": 2.3134,
            "popupContent": "\n                    <b>Pont Alexandre III</b><br aria-hidden=\"true\">\n                    Coordonnées (2.3134, 48.8637)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Cyclisme sur route - arrivée Contre-la-montre <br aria-hidden=\"true\"> Natation marathon <br aria-hidden=\"true\"> Triathlon <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-09\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.3134,
                48.8637
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Bercy",
            "category": "venue-olympic",
            "sports": [
                "Basketball ",
                " Gymnastique artistique ",
                " Gymnastique trampoline "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-11",
            "lat": 48.83863,
            "lon": 2.378597,
            "popupContent": "\n                    <b>Arena Bercy</b><br aria-hidden=\"true\">\n                    Coordonnées (2.378597, 48.83863)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Basketball <br aria-hidden=\"true\"> Gymnastique artistique <br aria-hidden=\"true\"> Gymnastique trampoline <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-11\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.378597,
                48.83863
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Champ de Mars",
            "category": "venue-olympic",
            "sports": [
                "Judo ",
                " Lutte "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-11",
            "lat": 48.8531,
            "lon": 2.30252,
            "popupContent": "\n                    <b>Arena Champ de Mars</b><br aria-hidden=\"true\">\n                    Coordonnées (2.30252, 48.8531)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Judo <br aria-hidden=\"true\"> Lutte <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-11\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.30252,
                48.8531
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Porte de la Chapelle",
            "category": "venue-olympic",
            "sports": [
                "Badminton ",
                " Gymnastique rythmique "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-10",
            "lat": 48.8997292,
            "lon": 2.3605141,
            "popupContent": "\n                    <b>Arena Porte de la Chapelle</b><br aria-hidden=\"true\">\n                    Coordonnées (2.3605141, 48.8997292)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Badminton <br aria-hidden=\"true\"> Gymnastique rythmique <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.3605141,
                48.8997292
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Porte de la Chapelle",
            "category": "venue-paralympic",
            "sports": [
                "Para badminton ",
                " Para Haltérophilie "
            ],
            "startDate": "2024-08-29",
            "endDate": "2024-09-08",
            "lat": 48.8997292,
            "lon": 2.3605141,
            "popupContent": "\n                    <b>Arena Porte de la Chapelle</b><br aria-hidden=\"true\">\n                    Coordonnées (2.3605141, 48.8997292)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para badminton <br aria-hidden=\"true\"> Para Haltérophilie <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-29 au 2024-09-08\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.3605141,
                48.8997292
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Clichy-sous-Bois",
            "category": "venue-paralympic",
            "sports": [
                "Para cyclisme sur route "
            ],
            "startDate": "2024-09-04",
            "endDate": "2024-09-07",
            "lat": 48.906345,
            "lon": 2.553544,
            "popupContent": "\n                    <b>Clichy-sous-Bois</b><br aria-hidden=\"true\">\n                    Coordonnées (2.553544, 48.906345)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para cyclisme sur route <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-09-04 au 2024-09-07\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.553544,
                48.906345
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Centre national de tir de Châteauroux",
            "category": "venue-paralympic",
            "sports": [
                "Para Tir Sportif "
            ],
            "startDate": "2024-08-30",
            "endDate": "2024-09-05",
            "lat": 46.8157,
            "lon": 1.7582,
            "popupContent": "\n                    <b>Centre national de tir de Châteauroux</b><br aria-hidden=\"true\">\n                    Coordonnées (1.7582, 46.8157)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para Tir Sportif <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-30 au 2024-09-05\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                1.7582,
                46.8157
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Paris La Défense Arena",
            "category": "venue-paralympic",
            "sports": [
                "Para Natation "
            ],
            "startDate": "2024-08-29",
            "endDate": "2024-09-07",
            "lat": 48.8954,
            "lon": 2.2294,
            "popupContent": "\n                    <b>Paris La Défense Arena</b><br aria-hidden=\"true\">\n                    Coordonnées (2.2294, 48.8954)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para Natation <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-29 au 2024-09-07\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.2294,
                48.8954
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade Tour Eiffel",
            "category": "venue-paralympic",
            "sports": [
                "Cécifoot "
            ],
            "startDate": "2024-09-01",
            "endDate": "2024-09-07",
            "lat": 48.85613,
            "lon": 2.2978,
            "popupContent": "\n                    <b>Stade Tour Eiffel</b><br aria-hidden=\"true\">\n                    Coordonnées (2.2978, 48.85613)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Cécifoot <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-09-01 au 2024-09-07\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.2978,
                48.85613
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Grand Palais",
            "category": "venue-olympic",
            "sports": [
                "Escrime ",
                " Taekwondo "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-10",
            "lat": 48.86616355,
            "lon": 2.3125474,
            "popupContent": "\n                    <b>Grand Palais</b><br aria-hidden=\"true\">\n                    Coordonnées (2.3125474, 48.86616355)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Escrime <br aria-hidden=\"true\"> Taekwondo <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.3125474,
                48.86616355
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Hôtel de Ville",
            "category": "venue-olympic",
            "sports": [
                "Athlétisme - départ Marathon "
            ],
            "startDate": "2024-08-10",
            "endDate": "2024-08-11",
            "lat": 48.8563881,
            "lon": 2.35222203,
            "popupContent": "\n                    <b>Hôtel de Ville</b><br aria-hidden=\"true\">\n                    Coordonnées (2.35222203, 48.8563881)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Athlétisme - départ Marathon <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-10 au 2024-08-11\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.35222203,
                48.8563881
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Marina de Marseille",
            "category": "venue-olympic",
            "sports": [
                "Voile "
            ],
            "startDate": "2024-07-28",
            "endDate": "2024-08-08",
            "lat": 43.2661,
            "lon": 5.3678,
            "popupContent": "\n                    <b>Marina de Marseille</b><br aria-hidden=\"true\">\n                    Coordonnées (5.3678, 43.2661)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Voile <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-28 au 2024-08-08\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5.3678,
                43.2661
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade de la Beaujoire",
            "category": "venue-olympic",
            "sports": [
                "Football "
            ],
            "startDate": "2024-07-24",
            "endDate": "2024-08-08",
            "lat": 47.25593494,
            "lon": -1.52469927,
            "popupContent": "\n                    <b>Stade de la Beaujoire</b><br aria-hidden=\"true\">\n                    Coordonnées (-1.52469927, 47.25593494)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Football <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-24 au 2024-08-08\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -1.52469927,
                47.25593494
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Paris Nord",
            "category": "venue-olympic",
            "sports": [
                "Boxe ",
                " Pentathlon moderne "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-08",
            "lat": 48.9721,
            "lon": 2.5149,
            "popupContent": "\n                    <b>Arena Paris Nord</b><br aria-hidden=\"true\">\n                    Coordonnées (2.5149, 48.9721)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Boxe <br aria-hidden=\"true\"> Pentathlon moderne <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-08\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.5149,
                48.9721
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Paris Nord",
            "category": "venue-paralympic",
            "sports": [
                "Volleyball assis "
            ],
            "startDate": "2024-08-29",
            "endDate": "2024-09-07",
            "lat": 48.9721,
            "lon": 2.5149,
            "popupContent": "\n                    <b>Arena Paris Nord</b><br aria-hidden=\"true\">\n                    Coordonnées (2.5149, 48.9721)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Volleyball assis <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-29 au 2024-09-07\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.5149,
                48.9721
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Parc des Princes",
            "category": "venue-olympic",
            "sports": [
                "Football "
            ],
            "startDate": "2024-07-24",
            "endDate": "2024-08-10",
            "lat": 48.84156974,
            "lon": 2.253048697,
            "popupContent": "\n                    <b>Parc des Princes</b><br aria-hidden=\"true\">\n                    Coordonnées (2.253048697, 48.84156974)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Football <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-24 au 2024-08-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.253048697,
                48.84156974
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade Roland Garros",
            "category": "venue-paralympic",
            "sports": [
                "Tennis fauteuil "
            ],
            "startDate": "2024-08-30",
            "endDate": "2024-09-07",
            "lat": 48.845968,
            "lon": 2.253522,
            "popupContent": "\n                    <b>Stade Roland Garros</b><br aria-hidden=\"true\">\n                    Coordonnées (2.253522, 48.845968)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Tennis fauteuil <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-30 au 2024-09-07\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.253522,
                48.845968
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade Roland Garros",
            "category": "venue-olympic",
            "sports": [
                "Tennis ",
                " Boxe "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-10",
            "lat": 48.845968,
            "lon": 2.253522,
            "popupContent": "\n                    <b>Stade Roland Garros</b><br aria-hidden=\"true\">\n                    Coordonnées (2.253522, 48.845968)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Tennis <br aria-hidden=\"true\"> Boxe <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.253522,
                48.845968
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Paris Sud 1",
            "category": "venue-olympic",
            "sports": [
                "Volley-ball "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-11",
            "lat": 48.832968,
            "lon": 2.2840069,
            "popupContent": "\n                    <b>Arena Paris Sud 1</b><br aria-hidden=\"true\">\n                    Coordonnées (2.2840069, 48.832968)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Volley-ball <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-11\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.2840069,
                48.832968
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Paris Sud 1",
            "category": "venue-paralympic",
            "sports": [
                "Boccia "
            ],
            "startDate": "2024-08-29",
            "endDate": "2024-09-05",
            "lat": 48.832968,
            "lon": 2.2840069,
            "popupContent": "\n                    <b>Arena Paris Sud 1</b><br aria-hidden=\"true\">\n                    Coordonnées (2.2840069, 48.832968)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Boccia <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-29 au 2024-09-05\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.2840069,
                48.832968
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Tahiti Teahupo'o",
            "category": "venue-olympic",
            "sports": [
                "Surf "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-07-30",
            "lat": -17.86693,
            "lon": -149.25208,
            "popupContent": "\n                    <b>Tahiti Teahupo'o</b><br aria-hidden=\"true\">\n                    Coordonnées (-149.25208, -17.86693)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Surf <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-07-30\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                -149.25208,
                -17.86693
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Vélodrome National de Saint-Quentin-en-Yvelines",
            "category": "venue-paralympic",
            "sports": [
                "Para Cyclisme sur piste "
            ],
            "startDate": "2024-08-29",
            "endDate": "2024-09-01",
            "lat": 48.78800979,
            "lon": 2.03498269,
            "popupContent": "\n                    <b>Vélodrome National de Saint-Quentin-en-Yvelines</b><br aria-hidden=\"true\">\n                    Coordonnées (2.03498269, 48.78800979)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para Cyclisme sur piste <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-29 au 2024-09-01\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.03498269,
                48.78800979
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Château de Versailles",
            "category": "venue-olympic",
            "sports": [
                "Sports équestres - dressage ",
                " Sports équestres - concours complet ",
                " Sports équestres - saut d'obstacles ",
                " Pentathlon moderne "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-11",
            "lat": 48.81432266,
            "lon": 2.08452588,
            "popupContent": "\n                    <b>Château de Versailles</b><br aria-hidden=\"true\">\n                    Coordonnées (2.08452588, 48.81432266)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Sports équestres - dressage <br aria-hidden=\"true\"> Sports équestres - concours complet <br aria-hidden=\"true\"> Sports équestres - saut d'obstacles <br aria-hidden=\"true\"> Pentathlon moderne <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-11\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.08452588,
                48.81432266
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Château de Versailles",
            "category": "venue-paralympic",
            "sports": [
                "Para Equitation "
            ],
            "startDate": "2024-09-03",
            "endDate": "2024-09-07",
            "lat": 48.81432266,
            "lon": 2.08452588,
            "popupContent": "\n                    <b>Château de Versailles</b><br aria-hidden=\"true\">\n                    Coordonnées (2.08452588, 48.81432266)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para Equitation <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-09-03 au 2024-09-07\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.08452588,
                48.81432266
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade nautique de Vaires-sur-Marne - bassin d'eaux calmes",
            "category": "venue-paralympic",
            "sports": [
                "Para Aviron ",
                " Para Canoë "
            ],
            "startDate": "2024-08-30",
            "endDate": "2024-09-08",
            "lat": 48.8623,
            "lon": 2.6348,
            "popupContent": "\n                    <b>Stade nautique de Vaires-sur-Marne - bassin d'eaux calmes</b><br aria-hidden=\"true\">\n                    Coordonnées (2.6348, 48.8623)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para Aviron <br aria-hidden=\"true\"> Para Canoë <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-30 au 2024-09-08\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.6348,
                48.8623
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade nautique de Vaires-sur-Marne - stade d'eaux vives",
            "category": "venue-olympic",
            "sports": [
                "Canoë-kayak slalom "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-05",
            "lat": 48.86223209583829,
            "lon": 2.6395463613678416,
            "popupContent": "\n                    <b>Stade nautique de Vaires-sur-Marne - stade d'eaux vives</b><br aria-hidden=\"true\">\n                    Coordonnées (2.6395463613678416, 48.86223209583829)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Canoë-kayak slalom <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-05\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.6395463613678416,
                48.86223209583829
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Centre Aquatique",
            "category": "venue-olympic",
            "sports": [
                "Natation artistique ",
                " Plongeon ",
                " Water-polo "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-10",
            "lat": 48.923723,
            "lon": 2.35578,
            "popupContent": "\n                    <b>Centre Aquatique</b><br aria-hidden=\"true\">\n                    Coordonnées (2.35578, 48.923723)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Natation artistique <br aria-hidden=\"true\"> Plongeon <br aria-hidden=\"true\"> Water-polo <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.35578,
                48.923723
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Champ de Mars",
            "category": "venue-paralympic",
            "sports": [
                "Para Judo ",
                " Rugby fauteuil "
            ],
            "startDate": "2024-08-29",
            "endDate": "2024-09-07",
            "lat": 48.8531,
            "lon": 2.30252,
            "popupContent": "\n                    <b>Arena Champ de Mars</b><br aria-hidden=\"true\">\n                    Coordonnées (2.30252, 48.8531)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para Judo <br aria-hidden=\"true\"> Rugby fauteuil <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-29 au 2024-09-07\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.30252,
                48.8531
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Centre national de tir de Châteauroux",
            "category": "venue-olympic",
            "sports": [
                "Tir "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-05",
            "lat": 46.8157,
            "lon": 1.7582,
            "popupContent": "\n                    <b>Centre national de tir de Châteauroux</b><br aria-hidden=\"true\">\n                    Coordonnées (1.7582, 46.8157)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Tir <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-05\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                1.7582,
                46.8157
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Paris La Défense Arena",
            "category": "venue-olympic",
            "sports": [
                "Natation ",
                " Water-polo "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-08-11",
            "lat": 48.8954,
            "lon": 2.2294,
            "popupContent": "\n                    <b>Paris La Défense Arena</b><br aria-hidden=\"true\">\n                    Coordonnées (2.2294, 48.8954)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Natation <br aria-hidden=\"true\"> Water-polo <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-08-11\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.2294,
                48.8954
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Colline d’Elancourt",
            "category": "venue-olympic",
            "sports": [
                "Cyclisme VTT "
            ],
            "startDate": "2024-07-28",
            "endDate": "2024-07-29",
            "lat": 48.78981063,
            "lon": 1.9642379,
            "popupContent": "\n                    <b>Colline d’Elancourt</b><br aria-hidden=\"true\">\n                    Coordonnées (1.9642379, 48.78981063)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Cyclisme VTT <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-28 au 2024-07-29\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                1.9642379,
                48.78981063
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Invalides",
            "category": "venue-paralympic",
            "sports": [
                "Para Tir à l'arc ",
                " Para Athlétisme - arrivée Marathon "
            ],
            "startDate": "2024-08-29",
            "endDate": "2024-09-08",
            "lat": 48.85704803,
            "lon": 2.312835932,
            "popupContent": "\n                    <b>Invalides</b><br aria-hidden=\"true\">\n                    Coordonnées (2.312835932, 48.85704803)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para Tir à l'arc <br aria-hidden=\"true\"> Para Athlétisme - arrivée Marathon <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-29 au 2024-09-08\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.312835932,
                48.85704803
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "La Concorde 1",
            "category": "venue-olympic",
            "sports": [
                "Basketball 3x3 (BK3)",
                " Breaking "
            ],
            "startDate": "2024-07-30",
            "endDate": "2024-08-10",
            "lat": 48.86640642,
            "lon": 2.32119515,
            "popupContent": "\n                    <b>La Concorde 1</b><br aria-hidden=\"true\">\n                    Coordonnées (2.32119515, 48.86640642)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Basketball 3x3 (BK3)<br aria-hidden=\"true\"> Breaking <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-30 au 2024-08-10\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.32119515,
                48.86640642
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "La Concorde 2",
            "category": "venue-olympic",
            "sports": [
                "BMX freestyle "
            ],
            "startDate": "2024-07-30",
            "endDate": "2024-07-31",
            "lat": 48.86504456,
            "lon": 2.32119516,
            "popupContent": "\n                    <b>La Concorde 2</b><br aria-hidden=\"true\">\n                    Coordonnées (2.32119516, 48.86504456)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    BMX freestyle <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-30 au 2024-07-31\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.32119516,
                48.86504456
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "La Concorde 3",
            "category": "venue-olympic",
            "sports": [
                "Skateboard "
            ],
            "startDate": "2024-07-27",
            "endDate": "2024-07-28",
            "lat": 48.86486788,
            "lon": 2.32139191,
            "popupContent": "\n                    <b>La Concorde 3</b><br aria-hidden=\"true\">\n                    Coordonnées (2.32139191, 48.86486788)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Skateboard <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-27 au 2024-07-28\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.32139191,
                48.86486788
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "La Courneuve",
            "category": "venue-paralympic",
            "sports": [
                "Para Athlétisme - départ Marathon "
            ],
            "startDate": "2024-09-08",
            "endDate": "2024-09-08",
            "lat": 48.9372382,
            "lon": 2.3994101,
            "popupContent": "\n                    <b>La Courneuve</b><br aria-hidden=\"true\">\n                    Coordonnées (2.3994101, 48.9372382)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Para Athlétisme - départ Marathon <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-09-08 au 2024-09-08\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.3994101,
                48.9372382
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade de Lyon",
            "category": "venue-olympic",
            "sports": [
                "Football "
            ],
            "startDate": "2024-07-24",
            "endDate": "2024-08-09",
            "lat": 45.76514165,
            "lon": 4.98199275,
            "popupContent": "\n                    <b>Stade de Lyon</b><br aria-hidden=\"true\">\n                    Coordonnées (4.98199275, 45.76514165)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Football <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-24 au 2024-08-09\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                4.98199275,
                45.76514165
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade de Marseille",
            "category": "venue-olympic",
            "sports": [
                "Football "
            ],
            "startDate": "2024-07-24",
            "endDate": "2024-08-06",
            "lat": 43.2698,
            "lon": 5.3959,
            "popupContent": "\n                    <b>Stade de Marseille</b><br aria-hidden=\"true\">\n                    Coordonnées (5.3959, 43.2698)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Football <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-24 au 2024-08-06\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                5.3959,
                43.2698
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Arena Paris Sud 6",
            "category": "venue-paralympic",
            "sports": [
                "Goalball "
            ],
            "startDate": "2024-08-29",
            "endDate": "2024-09-05",
            "lat": 48.829381,
            "lon": 2.290865,
            "popupContent": "\n                    <b>Arena Paris Sud 6</b><br aria-hidden=\"true\">\n                    Coordonnées (2.290865, 48.829381)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Goalball <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-29 au 2024-09-05\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.290865,
                48.829381
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade de France",
            "category": "venue-olympic",
            "sports": [
                "Athlétisme ",
                " Rugby à 7 (RU7)",
                " Cérémonie de clôture "
            ],
            "startDate": "2024-07-24",
            "endDate": "2024-08-11",
            "lat": 48.924475,
            "lon": 2.360127,
            "popupContent": "\n                    <b>Stade de France</b><br aria-hidden=\"true\">\n                    Coordonnées (2.360127, 48.924475)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Athlétisme <br aria-hidden=\"true\"> Rugby à 7 (RU7)<br aria-hidden=\"true\"> Cérémonie de clôture <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-07-24 au 2024-08-11\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.360127,
                48.924475
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Trocadéro",
            "category": "venue-olympic",
            "sports": [
                "Athlétisme marche ",
                " Cyclisme sur route - Course sur route "
            ],
            "startDate": "2024-08-01",
            "endDate": "2024-08-07",
            "lat": 48.85972558,
            "lon": 2.29221884,
            "popupContent": "\n                    <b>Trocadéro</b><br aria-hidden=\"true\">\n                    Coordonnées (2.29221884, 48.85972558)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Athlétisme marche <br aria-hidden=\"true\"> Cyclisme sur route - Course sur route <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-01 au 2024-08-07\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.29221884,
                48.85972558
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Vélodrome National de Saint-Quentin-en-Yvelines",
            "category": "venue-olympic",
            "sports": [
                "Cyclisme sur piste "
            ],
            "startDate": "2024-08-05",
            "endDate": "2024-08-11",
            "lat": 48.78800979,
            "lon": 2.03498269,
            "popupContent": "\n                    <b>Vélodrome National de Saint-Quentin-en-Yvelines</b><br aria-hidden=\"true\">\n                    Coordonnées (2.03498269, 48.78800979)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    Cyclisme sur piste <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-08-05 au 2024-08-11\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.03498269,
                48.78800979
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {
            "name": "Stade BMX de Saint-Quentin-en-Yvelines",
            "category": "venue-olympic",
            "sports": [
                "BMX Racing "
            ],
            "startDate": "2024-09-01",
            "endDate": "2024-09-02",
            "lat": 48.78800979,
            "lon": 2.03498269,
            "popupContent": "\n                    <b>Stade BMX de Saint-Quentin-en-Yvelines</b><br aria-hidden=\"true\">\n                    Coordonnées (2.03498269, 48.78800979)<br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Sports</b>:<br aria-hidden=\"true\">\n                    BMX Racing <br aria-hidden=\"true\"><br aria-hidden=\"true\">\n                    <b>Dates</b>:<br aria-hidden=\"true\">\n                    2024-09-01 au 2024-09-02\n                "
        },
        "geometry": {
            "type": "Point",
            "coordinates": [
                2.03498269,
                48.78800979
            ]
        }
    }
]
// const fs = require("fs");
// const { parse } = require("csv-parse");

// const dataFile = "../../../data/paris-2024-sites-de-competition.csv"

// function readData(file) {
//     fs.createReadStream(file)
//         .pipe(parse({ delimiter: ";", from_line: 2 }))
//         .on("data", function (row) {
//             let coordinates = [row[7], row[8]]
//             console.log(coordinates);
//         })
//     return
// }

function createMap() {
    let myMap = L.map("map").setView([46.71109, 1.7191036], 6);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        // Attribution is obligatory as per copyright!
        maxZoom: 20
    }).addTo(myMap);
}

createMap()
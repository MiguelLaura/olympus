const fs = require("fs");
const { parse } = require("csv-parse");

const dataFile = "../../../data/paris-2024-sites-de-competition.csv"

function readData(file) {
    fs.createReadStream(file)
        .pipe(parse({ delimiter: ";", from_line: 2 }))
        .on("data", function (row) {
            let coordinates = [row[7], row[8]]
            console.log(coordinates);
        })
    return
}

readData(dataFile)
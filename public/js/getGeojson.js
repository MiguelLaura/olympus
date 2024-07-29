const readData = async () => {
    try {
        const res = await fetch(dataUrl, {
            headers: { Accept: 'application/json' },
        });

        if (res.status === 200) {
            const data = await res.json();
            return data
        } else {
            console.log(`Error code ${res.status}`);
        }
    } catch (err) {
        console.log(err)
    }
}

async function getGeojson() {
    var geojsonFeatures = [];

    let data = await readData();
    data.results.forEach((result) => {
        let locationName = result.nom_site,
            category = result.category_id,
            lat = result.point_geo.lat,
            lon = result.point_geo.lon,
            sports = result.sports.split(','),
            startDate = result.start_date,
            endDate = result.end_date;

        for (var sport in sports) {
            sports[sport] = sports[sport].replace(regSport, "");
        }
        var sportsStr = sports.join('<br aria-hidden="true">');

        geojsonFeatures.push({
            "type": "Feature",
            "properties": {
                "name": locationName,
                "category": category,
                "sports": sports,
                "startDate": startDate,
                "endDate": endDate,
                "lat": lat,
                "lon": lon,
                "popupContent": `
                    <b>${locationName}</b><br aria-hidden="true">
                    Coordonnées (${lon}, ${lat})<br aria-hidden="true"><br aria-hidden="true">
                    <b>Sports</b>:<br aria-hidden="true">
                    ${sportsStr}<br aria-hidden="true"><br aria-hidden="true">
                    <b>Dates</b>:<br aria-hidden="true">
                    ${startDate} au ${endDate}
                `
            },
            "geometry": {
                "type": "Point",
                "coordinates": [lon, lat]
            }
        });
    });

    console.log(geojsonFeatures);
}
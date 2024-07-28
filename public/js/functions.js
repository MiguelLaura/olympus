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

async function createMapMarkers(map) {
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
        sports = sports.join("<br>");

        let color = (category === "venue-paralympic") ? redIcon : blueIcon;
        let marker = L.marker([lat, lon], { icon: color, alt: locationName}).addTo(map);

        marker.bindPopup(`
            <b>${locationName}</b><br>
            Coordonnées (${lat}, ${lon})<br><br>
            <b>Sports</b>:<br>
            ${sports}<br><br>
            <b>Dates</b>:<br>
            ${startDate} au ${endDate}
            `).openPopup();
    });

    map.closePopup();
}

function onMapClick(event, map, popup) {
    popup
        .setLatLng(event.latlng)
        .setContent("Vous avez cliqué sur la carte aux coordonnées " + event.latlng.toString().replace("LatLng", "") + ".")
        .openOn(map);
}
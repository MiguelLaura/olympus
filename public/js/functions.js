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
    let olympicGroup = [];
    let paralympicGroup = [];

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
        sports = sports.join('<br aria-hidden="true">');

        let color = (category === "venue-paralympic") ? redIcon : blueIcon;
        let marker = L.marker([lat, lon], { icon: color, alt: locationName });

        marker.bindPopup(`
            <b>${locationName}</b><br aria-hidden="true">
            Coordonnées (${lat}, ${lon})<br aria-hidden="true"><br aria-hidden="true">
            <b>Sports</b>:<br aria-hidden="true">
            ${sports}<br aria-hidden="true"><br aria-hidden="true">
            <b>Dates</b>:<br aria-hidden="true">
            ${startDate} au ${endDate}
            `).openPopup();

        if (category === "venue-paralympic") {
            paralympicGroup.push(marker);
        } else {
            olympicGroup.push(marker);
        }
    });

    var paralympicLayer = L.layerGroup(paralympicGroup);
    var olympicLayer = L.layerGroup(olympicGroup);
    paralympicLayer.addTo(map);
    olympicLayer.addTo(map);

    var additionalMaps = {
        "Jeux paralympiques": paralympicLayer,
        "Jeux olympiques": olympicLayer,
    };

    L.control.layers(additionalMaps).addTo(map);

    map.closePopup();
}

function onMapClick(event, map, popup) {
    popup
        .setLatLng(event.latlng)
        .setContent("Vous avez cliqué sur la carte aux coordonnées " + event.latlng.toString().replace("LatLng", "") + ".")
        .openOn(map);
}
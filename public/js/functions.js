function onMapClick(event, map, popup) {
    popup
        .setLatLng(event.latlng)
        .setContent("Vous avez cliqué sur la carte aux coordonnées " + event.latlng.toString().replace("LatLng", "") + ".")
        .openOn(map);
}

function onEachFeature(feature, layer) {
    layer.bindPopup(feature.properties.popupContent);
}



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
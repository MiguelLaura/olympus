function onMapClick(event, map, popup) {
  popup
    .setLatLng(event.latlng)
    .setContent(
      "Vous avez cliqué sur la carte aux coordonnées " +
        event.latlng.toString().replace("LatLng", "") +
        ".",
    )
    .openOn(map);
}

function pointToLayer(feature) {
  let color =
    feature.properties.category === "venue-paralympic" ? redIcon : blueIcon;
  return L.marker([feature.properties.lat, feature.properties.lon], {
    icon: color,
    alt: feature.properties.name,
  });
}

function onEachFeature(feature, layer) {
  layer.bindPopup(feature.properties.popupContent);
}

function getAllSports(features) {
  var allSports = [];
  for (feature in features) {
    let sports = features[feature].properties.sports;
    for (sport in sports) {
      allSports.push(sports[sport]);
    }
  }
  allSports = new Set(allSports.sort());
  return allSports;
}

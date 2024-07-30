// Create map
var map = L.map("map").setView([27.019416, -76.640625], 3);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  // Attribution is obligatory as per copyright!
  maxZoom: 20,
}).addTo(map);

var geojsonLayer = L.geoJSON(geojsonFeatures, {
  pointToLayer: pointToLayer,
  onEachFeature: onEachFeature,
}).addTo(map);

var sports = getAllSports(geojsonFeatures);

// Create popups outside markers
// var popup = L.popup();
// map.on('click', (event) => {
//     onMapClick(event, map, popup);
// });

// Create title
let titleControl = new titleControlClass().addTo(map);

// Filtering on properties
let filterControl = new filterControlClass().addTo(map);

// Create legend
let legendControl = new legendControlClass().addTo(map);

map.addControl(new L.Control.Search({ layer: geojsonLayer }));

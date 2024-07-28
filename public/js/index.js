var map = L.map("map").setView([27.019416, -76.640625], 3);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    // Attribution is obligatory as per copyright!
    maxZoom: 20
}).addTo(map);

createMapMarkers(map);

var popup = L.popup();
map.on('click', (event) => {
    onMapClick(event, map, popup);
});

var info = L.control();

info.onAdd = function () {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function () {
    this._div.innerHTML = '<h1>Sites des compétitions<br aria-hidden="true"><br aria-hidden="true">J.O. Paris 2024</h1>';
};

info.addTo(map);
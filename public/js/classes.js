var titleControlClass = L.Control.extend({

    options: {
        position: 'topright'
    },

    onAdd: function () {
        var div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        div.innerHTML = '<h1>Sites des compétitions<br aria-hidden="true"><br aria-hidden="true">J.O. Paris 2024</h1>';
        return div;
    },
});

var legendControlClass = L.Control.extend({

    options: {
        position: 'bottomleft'
    },

    onAdd: function () {
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML += '<i style="background: #2981ca"></i> Jeux olympiques<br aria-hidden="true">';
        div.innerHTML += '<i style="background: #c81c2e"></i> Jeux paralympiques<br aria-hidden="true">';
        return div;
    },
});

let filterControlClass = L.Control.extend({

    options: {
        position: 'bottomright'
    },

    onAdd: function (map) {
        this.map = map;

        var div = L.DomUtil.create('div', 'leaflet-bar my-control');
        let title = L.DomUtil.create('h3', '', div);
        title.innerHTML = "Filtrer : ";

        // Start date
        let divMin = L.DomUtil.create('div', '', div);
        let labelMin = L.DomUtil.create('label', '', divMin);
        labelMin.innerHTML = "Date de début : ";
        let inputMin = L.DomUtil.create('input', 'input-number', divMin);
        inputMin.type = "date";
        inputMin.value = "2024-07-24";
        inputMin.min = "2024-07-24";
        inputMin.max = "2024-09-10";

        // End date
        let divMax = L.DomUtil.create('div', '', div);
        let labelMax = L.DomUtil.create('label', '', divMax);
        labelMax.innerHTML = "Date de fin : ";
        let inputMax = L.DomUtil.create('input', 'input-number', divMax);
        inputMax.type = "date";
        inputMax.value = "2024-07-24";
        inputMax.min = "2024-07-24";
        inputMax.max = "2024-09-10";

        // Checkbox for event (paralympics or olympics)
        let divType = L.DomUtil.create('div', '', div);
        divType.innerHTML = "Évènement : ";

        let divTypeOlympics = L.DomUtil.create('div', '', divType);
        let inputOlympics = L.DomUtil.create('input', '', divTypeOlympics);
        inputOlympics.type = "checkbox";
        inputOlympics.checked = true;
        let labelOlympics = L.DomUtil.create('label', '', divTypeOlympics);
        labelOlympics.innerHTML = "Jeux olympiques";

        let divTypeParalympics = L.DomUtil.create('div', '', divType);
        let inputParalympics = L.DomUtil.create('input', '', divTypeParalympics);
        inputParalympics.type = "checkbox";
        inputParalympics.checked = true;
        let labelParalympics = L.DomUtil.create('label', '', divTypeParalympics);
        labelParalympics.innerHTML = "Jeux paralympiques";

        // Filter
        var buttonFilter = L.DomUtil.create('button', 'button-class', div);
        buttonFilter.innerHTML = "Filtrer";

        L.DomEvent.on(buttonFilter, 'click', function () { this.filter(Date.parse(inputMin.value), Date.parse(inputMax.value), inputOlympics.checked, inputParalympics.checked); }, this);
        return div;
    },

    filter(startDate, endDate, inputOlympicsChecked, inputParalympicsChecked) {
        map.removeLayer(geojsonLayer);

        geojsonLayer = L.geoJSON(geojsonFeatures,
            {
                filter: function (feature) {
                    // Filter dates
                    if (startDate && endDate) {
                        if (endDate) {
                            if (!(feature.properties.startDate >= startDate && feature.properties.endDate <= endDate))
                                return false;
                        } else if (feature.properties.startDate < startDate)
                            return false;
                    }

                    // Filter event
                    if (feature.properties.type == "Jeux olympiques" && !inputOlympicsChecked) {
                        return false;
                    }
                    else if (feature.properties.type == "Jeux paralympiques" && !inputParalympicsChecked) {
                        return false;
                    }
                    else if (feature.properties.type == "COMMERCE" && !inputBusinessChecked) {
                        return false;
                    }

                    return true;
                }
            }).addTo(map);
    },

    onRemove: function (map) {
    }
});
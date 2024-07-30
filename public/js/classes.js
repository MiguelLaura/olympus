var titleControlClass = L.Control.extend({

    options: {
        position: 'topright'
    },

    onAdd: function () {
        var div = L.DomUtil.create('div', 'title'); // create a div with a class "title"
        div.innerHTML = '<h1>Sites des compétitions<br aria-hidden="true"><br aria-hidden="true">J.O. Paris 2024</h1>';
        return div;
    },
});

var legendControlClass = L.Control.extend({

    options: {
        position: 'bottomright'
    },

    onAdd: function () {
        var div = L.DomUtil.create('div', 'title legend');
        div.innerHTML += '<i style="background: #2981ca"></i> Jeux olympiques<br aria-hidden="true">';
        div.innerHTML += '<i style="background: #c81c2e"></i> Jeux paralympiques<br aria-hidden="true">';
        return div;
    },
});

let filterControlClass = L.Control.extend({

    options: {
        position: 'bottomleft'
    },

    onAdd: function (map) {
        this.map = map;

        var div = L.DomUtil.create('div', 'filter-control');

        // Start date
        let divMin = L.DomUtil.create('div', '', div);
        let labelMin = L.DomUtil.create('label', '', divMin);
        labelMin.innerHTML = "Date de début : ";
        let inputMin = L.DomUtil.create('input', 'input-date', divMin);
        inputMin.type = "date";
        inputMin.value = "2024-07-24";
        inputMin.min = "2024-07-24";
        inputMin.max = "2024-09-10";

        // End date
        let divMax = L.DomUtil.create('div', '', div);
        let labelMax = L.DomUtil.create('label', '', divMax);
        labelMax.innerHTML = "Date de fin : ";
        let inputMax = L.DomUtil.create('input', 'input-date', divMax);
        inputMax.type = "date";
        inputMax.value = "2024-09-10";
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

        // Select for sports
        let divSports = L.DomUtil.create('div', '', div);
        let labelSports = L.DomUtil.create('label', '', divSports);
        labelSports.innerHTML = "Sport : ";

        let selectSports = L.DomUtil.create('select', '', divSports);
        let optionAll = L.DomUtil.create('option', '', selectSports);
        optionAll.value = "Tout";
        optionAll.innerHTML = "Tout";

        for (sport of sports) {
            let optionSport = L.DomUtil.create('option', '', selectSports);
            optionSport.value = sport;
            optionSport.innerHTML = sport;
        }

        // Filter
        var buttonFilter = L.DomUtil.create('button', 'button-class', div);
        buttonFilter.innerHTML = "Filtrer";

        L.DomEvent.on(buttonFilter, 'click', function () { this.filter(Date.parse(inputMin.value), Date.parse(inputMax.value), inputOlympics.checked, inputParalympics.checked, selectSports.value); }, this);
        return div;
    },

    filter(startDate, endDate, inputOlympicsChecked, inputParalympicsChecked, selectSportsValue) {
        map.removeLayer(geojsonLayer);

        geojsonLayer = L.geoJSON(geojsonFeatures,
            {
                filter: function (feature) {
                    // Filter dates
                    if (startDate && endDate) {
                        let featureStartDate = Date.parse(feature.properties.startDate),
                            featureEndDate = Date.parse(feature.properties.endDate);
                        if ((featureEndDate < startDate || featureStartDate > endDate)) {
                            return false;
                        } else if (endDate < startDate) {
                            return false;
                        }
                    }

                    // Filter event
                    if (feature.properties.category == "venue-olympic" && !inputOlympicsChecked) {
                        return false;
                    }
                    else if (feature.properties.category == "venue-paralympic" && !inputParalympicsChecked) {
                        return false;
                    }

                    // Filter sport
                    if (!(selectSportsValue == "Tout") && !feature.properties.sports.includes(selectSportsValue)) {
                        return false;
                    }
                    return true;
                },
                pointToLayer: pointToLayer,
                onEachFeature: onEachFeature
            }).addTo(map);
    },

    onRemove: function (map) {
    }
});
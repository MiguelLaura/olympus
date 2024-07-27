const dataUrl = "https://data.paris2024.org/api/explore/v2.1/catalog/datasets/paris-2024-sites-de-competition/records?limit=63"

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

async function createMap() {
    let myMap = L.map("map").setView([46.71109, 1.7191036], 2);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        // Attribution is obligatory as per copyright!
        maxZoom: 20
    }).addTo(myMap);

    let data = await readData();
    data.results.forEach((result) => {
        L.marker([result.point_geo.lat, result.point_geo.lon]).addTo(myMap);
    });

}

createMap()
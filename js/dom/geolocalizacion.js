
const d = document;
const n = navigator;

export default function getGeoLocation (id){
    const $id = d.getElementById(id);

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const success = (position) => {
        let coords = position.coords;

        $id.innerHTML = `<p> Tu posocion actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Presicion de la Lectura: <b>${coords.accuracy}</b> metros</li>
            </ul>
            <a target="_blank" href="https://wwww.google.com/maps/${coords.latitude},${coords.longitude},1z">Ir a Google  Maps</a>
        `;
        console.log(position);
    }

    const error = (err) =>{
        $id.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`;
        console.log(`Error: ${err.code}: ${err.message}`);
    }

    n.geolocation.getCurrentPosition(success, error, options);

}
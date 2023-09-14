

const key = "bcf1f4fa7384a652d096d36b3180ef70";
const searchButton = () => {
    let urll = `https://api.openweathermap.org/data/2.5/weather?q=${userLocation.value}&units=metric&appid=${key}`;

    fetch(urll)
        .then(response => response.json())
        .then((res) => {
            console.log(res);
            
            coun.innerHTML = `<p style="color:white; font-family: courier new; font-size: 1.2em;">Country : ${res.sys.country} </p>`;
            display.innerHTML =`<p style="color:white; font-family: courier new; font-size: 1.2em;">Temp : ${res.main.temp}°C </p>`
            lon.innerHTML = `<p style="color:white; font-family: courier new; font-size: 1.2em;">Longitude : ${res.coord.lon} </p>`;
            lat.innerHTML = `<p style="color:white; font-family: courier new; font-size: 1.2em;">Latitude : ${res.coord.lat} </p>`;
            windy.innerHTML = `<p style="color:white; font-family: courier new; font-size: 1.2em;">wind speed : ${res.wind.speed}km/h </p>`;
            userLocation.value = ""

        })
        .catch((err) => {
            console.log(err);
        })


    if (userLocation.value == "") {
        coun.innerHTML = "The input must not be empty"
    }
}
const API_KEY = "4d048641be0230dfd3b6ddeb8835f325";

function geoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherContainer = document.querySelector('#weather');
        weatherContainer.firstElementChild.innerText = data.name;
        weatherContainer.lastElementChild.innerText = data.weather[0].main;
    })

}
function geoFail() {
    console.log("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(geoOK, geoFail);
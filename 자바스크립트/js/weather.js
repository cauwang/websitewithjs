
const API_KEY ="ef591d629c8613a9e28ae85fcc853f60";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("you live in", lat, lng);
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data)=>{
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");

            city.innerText = data.name; 
            weather.innerText = data.weather[0].main;
        });
}
function onGeoError(){
    alert("can't find you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);



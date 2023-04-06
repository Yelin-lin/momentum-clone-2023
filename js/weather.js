const API_KEY = "a23f21ac3ca17107ef9c2a613e73aa6f";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(Response => Response.json()
        .then(data => {
            const city = document.querySelector("#weather div:first-child");
            const weather = document.querySelector("#weather div:nth-child(2)");
            const temp = document.querySelector("#weather div:last-child");
            city.innerText = `위치 : ${data.name}`;
            weather.innerText =  `날씨 : ${data.weather[0].main}`;
            temp.innerText = `온도 : ${data.main.temp}`;
    }));
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//https://namjackson.tistory.com/27
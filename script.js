const apiKey = "7d37a2c4626abd4a1a7d66750417ac36";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=nyeri";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;

}

checkWeather();
const apiKey = "be968629f0c815350c663d090efbc748";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searching input");
const searchBtn = document.querySelector(".searching button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather_card").style.display = "none";
    } else {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "+";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "elements/Clear.png";
        }  
        else if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "elements/Clouds.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "elements/Mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "elements/Rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "elements/Drizzle.png";
        }

        document.querySelector(".weather_card").style.display = "flex";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    if(searchBox.value != null){
        checkWeather(searchBox.value);
    }
})
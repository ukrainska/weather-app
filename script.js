const searchBar = document.getElementById("search-city");
const searchBtn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const cityTemp = document.getElementById("temperature");
const cityWind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const uvIndex = document.getElementById("uv");
const weatherConditions = document.getElementById("weather-conditions");

const apiKey = "59VNKM2L9TBEKL54GAS66S4W6";
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;

searchBtn.addEventListener("click", (event) => {
    const desiredLocation = searchBar.value.trim();

    if (!desiredLocation) {
        cityName.textContent = "Please enter a city name";
        showText(cityName);
        return;
    }

    searchWeather(desiredLocation);
    cityName.textContent = desiredLocation;
});

async function searchWeather(location) {
    try {
        const response = await fetch(`${url}${location}?unitGroup=metric&key=${apiKey}&contentType=json`);

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);

        const data = await response.json();
        displayWeather(data);
    }
    catch(error) {
        console.log("Fetch error: ", error);
    }
}

function displayWeather(data) {
    const currentWeather = data.currentConditions;

    showText(cityName);

    weatherConditions.textContent = currentWeather.conditions;
    showText(weatherConditions);

    cityTemp.textContent = currentWeather.temp + "°C";
    showText(cityTemp);

    cityWind.textContent = "Wind speed: " + currentWeather.windspeed;
    showText(cityWind);

    humidity.textContent = "Humidity: " + currentWeather.humidity;
    showText(humidity);

    uvIndex.textContent = "UV Index: " + currentWeather.uvindex;
    showText(uvIndex);
}

function showText(element) {
    element.removeAttribute("hidden");
}

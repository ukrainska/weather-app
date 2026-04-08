const searchBar = document.getElementById("search-city");
const searchBtn = document.getElementById("search-btn");
const cityName = document.getElementById("city-name");
const weatherConditions = document.getElementById("weather-conditions");

const apiKey = "59VNKM2L9TBEKL54GAS66S4W6";
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`;

searchBtn.addEventListener("click", (event) => {
    const desiredLocation = searchBar.value;
    searchWeather(desiredLocation);
    cityName.innerHTML = desiredLocation;
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
        console.log(data);
    }
    catch(error) {
        console.log("Fetch error: ", error);
    }
}

function displayWeather(data) {
    let currentWeather = data.currentConditions;
    weatherConditions.innerHTML = currentWeather.conditions;
    console.log(data.currentConditions.conditions);
}


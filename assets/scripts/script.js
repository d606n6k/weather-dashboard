// Pseudo-Code
// WHEN user enters a city and presses SEARCH BUTTON
    // THEN send request to API for weather data for searched city
        // CITY MAIN WEATHER (h2 for city name)
            // city name 
                // icon for current weather
            // temperature
            // humidity
            // wind speed
            // uv index
                // red border around uv index(maybe need a custom css class?)
        // APPEND to div we have set for the current weather for that city (#city-weather in html)

        // FIVE DAY FORECAST (h2 tag)
            // the next 5 days should be displayed INLINE
            // date
            // current weather ICON
            // temperature
            // humidity
        // APPEND five day forecast to div we have set for it in the html (#city-forecast in html)
    // THEN take the searched city name
        // save input to localstorage
            // id='saved-city'
            // append to list in sidebar 
                // list item should be clickable and runs the search for that city/input value
    
// Office Hours question
    // 1. How do I take the input text and append it into the api request
    // 2. How to I set up/iterate the five day forecast into cards

// Start js
var cityWeather = $("#city-weather"); // the output target for api city data
var cityForecaster = $("#city-forecast"); // out target for 5 day forecast
var cityInput = $("#city-input");
var submitBtn = $("#submit-btn");
var searchListGroup = $(".list-group");
var searchedCities = [];

function renderWeather(weather){
    // console.log(weather);
    
    // create h2 for the city name
    var cityName = document.createElement("h2");
    cityName.classList = "p-2 rounded";
    cityName.textContent = weather.city.name; 
    cityWeather.append(cityName);

    // create icon from weather data
    var icon = weather.list[0].weather[0].icon;
    var iconUrl = `HTTPS://openweathermap.org/img/wn/${icon}.png`;
    var weatherIcon = document.createElement("img"); 
    weatherIcon.setAttribute("src", iconUrl);
    weatherIcon.setAttribute("class", "p-2 ml-2 weather-icon rounded-circle");
    cityWeather.append(weatherIcon);

    // create p tag for humidity, wind,  temp
    var temperature = document.createElement("p");
    temperature.classList = "mb-2 mt-1 ml-2";
    temperature.textContent = "Temperature: " + weather.list[0].main.temp + "°F";
    cityWeather.append(temperature);
    
    var humidity = document.createElement("p");
    humidity.classList = "mb-2 mt-1 ml-2";
    humidity.textContent = "Humidity: " + weather.list[0].main.humidity + "%";
    cityWeather.append(humidity);

    var wind = document.createElement("p");
    wind.classList = "mb-0 mt-1 ml-2 pb-2";
    wind.textContent = "Current Wind Speed: " + weather.list[0].wind.speed + " mph, at " + weather.list[0].wind.deg + " degrees";
    cityWeather.append(wind);
};

function renderFiveDay(weather){
    // console.log(weather);
// OFFICE HOURS Q: possible for loop to iterate over all list items and display them? Also how do I group to display on a card?
    
    
    
    var fch2 = document.createElement("h2");
    fch2.classList = "p-2 rounded";
    fch2.textContent = "Five Day Forecast";
    cityForecaster.append(fch2);    

    // first item 
    var fcDateFirst = document.createElement("p");
    fcDateFirst.classList = "p-2";
    fcDateFirst.textContent = weather.list[0].dt_txt; 
    cityForecaster.append(fcDateFirst);

    // icon
    var fiveDayIcon = weather.list[0].weather[0].icon;
    var fiveDayIconUrl = `HTTPS://openweathermap.org/img/wn/${fiveDayIcon}.png`;
    var fcIconFirst = document.createElement("img");
    fcIconFirst.classList = "p-2 ml-2 weather-icon rounded-circle";
    fcIconFirst.setAttribute("src", fiveDayIconUrl);
    cityForecaster.append(fcIconFirst);

    // temp
    var fcTempFirst = document.createElement("p");
    fcTempFirst.classList = "mb-2 mt-1 ml-2";
    fcTempFirst.textContent = "Projected Temperature: " +weather.list[0].main.temp + " °F"; 
    cityForecaster.append(fcTempFirst);

    // humidity
    var fcHumidityFirst = document.createElement("p");
    fcHumidityFirst.classList = "mb-2 mt-1 ml-2";
    fcHumidityFirst.textContent = "Projected Humidity: " + weather.list[0].main.humidity; + "%" 
    cityForecaster.append(fcHumidityFirst);

     

};

function fetchWeather(getText){
    var apiToken = 'HTTPS://api.openweathermap.org/data/2.5/forecast?q=' + getText + '&units=imperial&units=imperial&appid=ce7ea9acf7f559c24dcf65e60fbcabe5';
    fetch(apiToken)
    .then(response => response.json())
    .then(data => renderWeather(data));
};

  // 5 day forecast
function weatherFiveDay(getText){
    fiveDayApiToken = 'HTTPS://api.openweathermap.org/data/2.5/forecast?q=' + getText + '&mode=json&cnt=5&units=metric&cnt=5&appid=598c713e4a8e658a3dfa9b54d09a9d30';
    fetch(fiveDayApiToken)
    .then(response => response.json())
    .then(data => renderFiveDay(data));
};
// console.log(weatherFiveDay);

submitBtn.on("click", function(event){
    getText = $(this).siblings("#city-input").val();

    if(!getText){
        alert("Please Enter a City Name!")
        return;
    } else {
        searchedCities.push(getText);
        window.localStorage.setItem("city", searchedCities);
        var searchedItem = document.createElement("button");
        searchedItem.setAttribute("class", "list-group-item");
        searchedItem.textContent = searchedCities;
        searchListGroup.append(searchedItem);
        searchedCities = [];
        cityWeather.empty();
        cityForecaster.empty();
        fetchWeather(getText);
        weatherFiveDay(getText);
    }
    document.getElementById("city-input").value = '';
});

// WIP Get the items out of localstorage and display them!
function getPastSearch(){
    var getItems = window.localStorage.getItem(searchedCities);
    console.log(getItems);
};

getPastSearch();
renderWeather();
renderFiveDay();


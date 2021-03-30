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
    // 2. How to I set up/iterate the five day forecast into cards

// Start js
var cityWeather = $("#city-weather"); // the output target for api city data
var cityForecaster1 = $("#city-forecast1"); // out target for 5 day forecast data
var cityForecaster2 = $("#city-forecast2"); // out target for 5 day forecast data
var cityForecaster3 = $("#city-forecast3"); // out target for 5 day forecast data
var cityForecaster4 = $("#city-forecast4"); // out target for 5 day forecast data
var cityForecaster5 = $("#city-forecast5"); // out target for 5 day forecast data
var cityInput = $("#city-input");
var submitBtn = $("#submit-btn");
var searchListGroup = $(".list-group");
var searchedCities = [];
var currentLat = [];
var currentLong = [];
var currentUvi = "";

function renderWeather(weather){
    // console.log(weather);

    currentLat = weather.city.coord.lat;
    currentLong = weather.city.coord.lon;

    // uv fetch function here
    fetchUvIndex();

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
    wind.classList = "mb-0 mt-1 ml-2";
    wind.textContent = "Current Wind Speed: " + weather.list[0].wind.speed + " mph";
    cityWeather.append(wind);
};

function renderFiveDay(weather){
    console.log(weather);
// OFFICE HOURS Q: possible for loop to iterate over all list items and display them? Also how do I group to display on a card?
    
    var fch2 = document.createElement("h2");
    fch2.classList = "p-2 rounded";
    fch2.textContent = "Five Day Forecast";
    cityForecaster1.append(fch2);    

    // first day 
    var dateData = weather.list[0].dt_txt;
    dateData.split(' ');
    var fcDateFirst = document.createElement("h4");
    fcDateFirst.classList = "p-2 d-inline";
    fcDateFirst.textContent = dateData; 
    cityForecaster1.append(fcDateFirst);

    // icon
    var fiveDayIcon = weather.list[0].weather[0].icon;
    var fiveDayIconUrl = `HTTPS://openweathermap.org/img/wn/${fiveDayIcon}.png`;
    var fcIconFirst = document.createElement("img");
    fcIconFirst.classList = "p-2 ml-2 weather-icon rounded-circle";
    fcIconFirst.setAttribute("src", fiveDayIconUrl);
    cityForecaster1.append(fcIconFirst);

    // temp
    var fcTempFirst = document.createElement("p");
    fcTempFirst.classList = "mb-2 mt-1 ml-2";
    fcTempFirst.textContent = "Projected Temperature: " +weather.list[0].main.temp + " °F"; 
    cityForecaster1.append(fcTempFirst);

    // humidity
    var fcHumidityFirst = document.createElement("p");
    fcHumidityFirst.classList = "mb-2 mt-1 ml-2";
    fcHumidityFirst.textContent = "Projected Humidity: " + weather.list[0].main.humidity + "%"; 
    cityForecaster1.append(fcHumidityFirst);

    
    // second day 
    var dateData = weather.list[1].dt_txt;
    dateData.split(' ');
    var fcDateFirst = document.createElement("h4");
    fcDateFirst.classList = "p-2 d-inline";
    fcDateFirst.textContent = dateData; 
    cityForecaster2.append(fcDateFirst);

    // icon
    var fiveDayIcon = weather.list[1].weather[0].icon;
    var fiveDayIconUrl = `HTTPS://openweathermap.org/img/wn/${fiveDayIcon}.png`;
    var fcIconFirst = document.createElement("img");
    fcIconFirst.classList = "p-2 ml-2 weather-icon rounded-circle";
    fcIconFirst.setAttribute("src", fiveDayIconUrl);
    cityForecaster2.append(fcIconFirst);

    // temp
    var fcTempFirst = document.createElement("p");
    fcTempFirst.classList = "mb-2 mt-1 ml-2";
    fcTempFirst.textContent = "Projected Temperature: " +weather.list[1].main.temp + " °F"; 
    cityForecaster2.append(fcTempFirst);

    // humidity
    var fcHumidityFirst = document.createElement("p");
    fcHumidityFirst.classList = "mb-2 mt-1 ml-2";
    fcHumidityFirst.textContent = "Projected Humidity: " + weather.list[1].main.humidity + "%"; 
    cityForecaster2.append(fcHumidityFirst);

    
    // third day 
    var dateData = weather.list[2].dt_txt;
    dateData.split(' ');
    var fcDateFirst = document.createElement("h4");
    fcDateFirst.classList = "p-2 d-inline";
    fcDateFirst.textContent = dateData; 
    cityForecaster3.append(fcDateFirst);

    // icon
    var fiveDayIcon = weather.list[2].weather[0].icon;
    var fiveDayIconUrl = `HTTPS://openweathermap.org/img/wn/${fiveDayIcon}.png`;
    var fcIconFirst = document.createElement("img");
    fcIconFirst.classList = "p-2 ml-2 weather-icon rounded-circle";
    fcIconFirst.setAttribute("src", fiveDayIconUrl);
    cityForecaster3.append(fcIconFirst);

    // temp
    var fcTempFirst = document.createElement("p");
    fcTempFirst.classList = "mb-2 mt-1 ml-2";
    fcTempFirst.textContent = "Projected Temperature: " +weather.list[2].main.temp + " °F"; 
    cityForecaster3.append(fcTempFirst);

    // humidity
    var fcHumidityFirst = document.createElement("p");
    fcHumidityFirst.classList = "mb-2 mt-1 ml-2";
    fcHumidityFirst.textContent = "Projected Humidity: " + weather.list[2].main.humidity + "%"; 
    cityForecaster3.append(fcHumidityFirst);

    // fourth day 
    var dateData = weather.list[2].dt_txt;
    dateData.split(' ');
    var fcDateFirst = document.createElement("h4");
    fcDateFirst.classList = "p-2 d-inline";
    fcDateFirst.textContent = dateData; 
    cityForecaster4.append(fcDateFirst);

    // icon
    var fiveDayIcon = weather.list[3].weather[0].icon;
    var fiveDayIconUrl = `HTTPS://openweathermap.org/img/wn/${fiveDayIcon}.png`;
    var fcIconFirst = document.createElement("img");
    fcIconFirst.classList = "p-2 ml-2 weather-icon rounded-circle";
    fcIconFirst.setAttribute("src", fiveDayIconUrl);
    cityForecaster4.append(fcIconFirst);

    // temp
    var fcTempFirst = document.createElement("p");
    fcTempFirst.classList = "mb-2 mt-1 ml-2";
    fcTempFirst.textContent = "Projected Temperature: " +weather.list[3].main.temp + " °F"; 
    cityForecaster4.append(fcTempFirst);

    // humidity
    var fcHumidityFirst = document.createElement("p");
    fcHumidityFirst.classList = "mb-2 mt-1 ml-2";
    fcHumidityFirst.textContent = "Projected Humidity: " + weather.list[3].main.humidity + "%"; 
    cityForecaster4.append(fcHumidityFirst);

    // fifth day
    var dateData = weather.list[2].dt_txt;
    dateData.split(' ');
    var fcDateFirst = document.createElement("h4");
    fcDateFirst.classList = "p-2 d-inline";
    fcDateFirst.textContent = dateData; 
    cityForecaster5.append(fcDateFirst);

    // icon
    var fiveDayIcon = weather.list[4].weather[0].icon;
    var fiveDayIconUrl = `HTTPS://openweathermap.org/img/wn/${fiveDayIcon}.png`;
    var fcIconFirst = document.createElement("img");
    fcIconFirst.classList = "p-2 ml-2 weather-icon rounded-circle";
    fcIconFirst.setAttribute("src", fiveDayIconUrl);
    cityForecaster5.append(fcIconFirst);

    // temp
    var fcTempFirst = document.createElement("p");
    fcTempFirst.classList = "mb-2 mt-1 ml-2";
    fcTempFirst.textContent = "Projected Temperature: " +weather.list[4].main.temp + " °F"; 
    cityForecaster5.append(fcTempFirst);

    // humidity
    var fcHumidityFirst = document.createElement("p");
    fcHumidityFirst.classList = "mb-2 mt-1 ml-2";
    fcHumidityFirst.textContent = "Projected Humidity: " + weather.list[4].main.humidity + "%"; 
    cityForecaster5.append(fcHumidityFirst);
};

// city current weather 
function fetchWeather(getText){
    var apiToken = 'HTTPS://api.openweathermap.org/data/2.5/forecast?q=' + getText + '&units=imperial&units=imperial&appid=ce7ea9acf7f559c24dcf65e60fbcabe5';

    fetch(apiToken)
    .then(response => response.json())
    .then(data => renderWeather(data))
};

// get UV index fetch
function fetchUvIndex(){
    var uvApiToken = "https://api.openweathermap.org/data/2.5/onecall?lat=" + currentLat + "&lon=" + currentLong +"&units=imperial&exclude=hourly,minutely&appid=598c713e4a8e658a3dfa9b54d09a9d30";
    fetch(uvApiToken)
    .then(response => response.json())
    .then(function(response){
        currentUvi = response.current.uvi;
        // append uvi
        var uvi = document.createElement("p");
        uvi.classList = "mb-2 mt-1 ml-2 pb-2";
        uvi.textContent = "Current UV Index: " + currentUvi;
        cityWeather.append(uvi);
    })
    
};

  // 5 day forecast
function weatherFiveDay(getText){
   var fiveDayApiToken = 'HTTPS://api.openweathermap.org/data/2.5/forecast?q=' + getText + '&mode=json&units=imperial&cnt=5&appid=598c713e4a8e658a3dfa9b54d09a9d30';
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
        window.localStorage.setItem("city", JSON.stringify(searchedCities));
        searchListGroup.empty();
        for(i = 0; i < searchedCities.length; i++){
            var searchedItem = document.createElement("button");
            searchedItem.classList = "list-group-item mt-2 rounded";
            searchedItem.textContent = searchedCities[i];
            searchListGroup.append(searchedItem);
        }
        // searchedCities = [];
        cityWeather.empty();
        cityForecaster1.empty();
        cityForecaster2.empty();
        cityForecaster3.empty();
        cityForecaster4.empty();
        cityForecaster5.empty();
        fetchWeather(getText);
        weatherFiveDay(getText);
    }
});

// Not sure if this code is needed
function getPastSearch(){
    var getItems = JSON.parse(window.localStorage.getItem("city"));
    // console.log(getItems);
    for(i = 0; i < getItems.length; i++){
        // debugger;
        var searchedItem = document.createElement("button");
        searchedItem.classList = "list-group-item mt-2 rounded";
        searchedItem.textContent = getItems[i];
        searchListGroup.append(searchedItem);
    }
};

getPastSearch();
renderWeather();
renderFiveDay();

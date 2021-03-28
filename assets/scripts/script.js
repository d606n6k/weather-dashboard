// TODOS
// create repo w readme - DONE
// add Bootstrap to html - DONE
// add jQuery to html - DONE
// add 5 day forecast
    // create  
    // get an append to cityForecaster div
    

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
    
// Start js
var cityWeather = $("#city-weather"); // the output target for api city data
var cityForecaster = $("#city-forecast"); // out target for 5 day forecast
var cityInput = $("#city-input");
var submitBtn = $("#submit-btn");

// console.log(apiToken);

function renderWeather(weather){
    console.log(weather);
    // create h2 for the city name
    var cityName = document.createElement("h2");
    cityName.textContent = weather.city.name; 
    cityWeather.append(cityName);

    // create icon from weather data
    var icon = weather.list[0].weather[0].icon;
    // var iconUrl = "https://openweathermap.org/img/w/04n.png";
    var iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;
    var weatherIcon = document.createElement("img"); 
    weatherIcon.setAttribute("src", iconUrl);
    cityWeather.append(weatherIcon);

    // create p tag for himidity, wind,  temp
    var temperature = document.createElement("p");
    temperature.textContent = "Temperature: " + weather.list[0].main.temp + "F";
    cityWeather.append(temperature);
    
    var humidity = document.createElement("p");
    humidity.textContent = "Humidity: " + weather.list[0].main.humidity + "%";
    cityWeather.append(humidity);

    var wind = document.createElement("p");
    wind.textContent = "Current Wind Speed: " + weather.list[0].wind.speed + " mph, at " + weather.list[0].wind.deg + " degrees";
    cityWeather.append(wind);
};

function renderFiveDay(weather){
    console.log(weather);
// OFFICE HOURS Q: possible for loop to iterate over all list items and display them? Also how do I group to display on a card?

    // first item 
    var fcDateFirst = document.createElement("p");
    fcDateFirst.textContent = weather.list[0].dt_txt; 
    cityForecaster.append(fcDateFirst);

    // icon
    var fcIconFirst = document.createElement("p");
    fcIconFirst.textContent = weather.list[0].weather[0].icon; 
    cityForecaster.append(fcIconFirst);

    // temp
    var fcTempFirst = document.createElement("p");
    fcTempFirst.textContent = weather.list[0].main.temp; 
    cityForecaster.append(fcTempFirst);

    // humidity
    var fcHumidityFirst = document.createElement("p");
    fcHumidityFirst.textContent = weather.list[0].main.humidity; 
    cityForecaster.append(fcHumidityFirst);

};

function fetchWeather(){
    var apiToken = 'http://api.openweathermap.org/data/2.5/forecast?q=London&appid=ce7ea9acf7f559c24dcf65e60fbcabe5';
    fetch(apiToken)
    .then(response => response.json())
    .then(data => renderWeather(data));
};

  // 5 day forecast
function weatherFiveDay(){
    fiveDayApiToken = 'https://api.openweathermap.org/data/2.5/forecast?q=London&mode=json&cnt=5&units=metric&cnt=5&appid=598c713e4a8e658a3dfa9b54d09a9d30';
    fetch(fiveDayApiToken)
    .then(response => response.json())
    .then(data => renderFiveDay(data));
};
// console.log(weatherFiveDay);

// search bar
    // button click
submitBtn.on("click", function(event){
    getText = $(this).siblings("#city-input").val();

    // WIP
    if(getText === "undefined"){
        // if the text is undefined we need to not let the user submit the search to localstorage
        alert("Something!")
    }
    window.localStorage.setItem("city", getText);
});
// we need to output localstorage items to ul > li items w links

fetchWeather();
weatherFiveDay();
renderWeather();
renderFiveDay();

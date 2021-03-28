// Open Weather Map API Key - ce7ea9acf7f559c24dcf65e60fbcabe5

// TODOS
// create repo w readme - DONE
// add Bootstrap to html - DONE
// add jQuery to html - DONE

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
var cityForecastr = $("#city-forecast"); // out target for 5 day forecast
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
    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
    // question for office hours: how the hell do I at an src attribute when creating an element via createElement
    var weatherIcon = document.createElement("p", { src : iconUrl});
    $("i").attr("src", iconUrl);
    // document.getElementsByTagName(i).src = iconUrl;
    weatherIcon.textContent = weather.list[0].weather[0].icon;
    cityWeather.append(weatherIcon);

    // create p tag for himidity, wind, description, temp
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

function fetchWeather(){
    var apiToken = 'http://api.openweathermap.org/data/2.5/forecast?q=london,uk&appid=ce7ea9acf7f559c24dcf65e60fbcabe5';
    fetch(apiToken)
    .then(response => response.json())
    .then(data => renderWeather(data));
};

// console.log(cityInput);
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


// function formSubmitHandler(event) {
//     event.preventDefault();
  
//     var cityName = cityInput.value.trim();
//     console.log(cityName);
  
    // if (cityName) {
    // //   getUserRepos(username);
  
    //   repoContainerEl.textContent = '';
    //   nameInputEl.value = '';
    // } else {
    //   alert('Please enter a GitHub username');
    // }
//   };
//##### button onclick
// submitBtn.on("click", formSubmitHandler);


//##### the fetch ####
// var getUserRepos = function (user) {
//     var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=london,uk&appid=ce7ea9acf7f559c24dcf65e60fbcabe5';
  
//     fetch(apiUrl)
//       .then(function (response) {
//         if (response.ok) {
//           response.json().then(function (data) {
//             displayRepos(data, user);
//           });
//         } else {
//           alert('Error: ' + response.statusText);
//         }
//       })
//       .catch(function (error) {
//         alert('Unable to connect to Open Weather!');
//       });
//   };

fetchWeather();
renderWeather();
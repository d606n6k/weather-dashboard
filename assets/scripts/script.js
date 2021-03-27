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
var apiToken = 'http://api.openweathermap.org/data/2.5/forecast?q=london,uk&appid=ce7ea9acf7f559c24dcf65e60fbcabe5'; //works only for London, UK at the moment
console.log(apiToken);

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

  
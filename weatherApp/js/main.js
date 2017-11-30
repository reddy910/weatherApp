var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

function loadWeather() {

var zip = document.getElementById("zip").value;
if(zip === ""){zip ="33637"}

var conditionsPath ="https://api.wunderground.com/api/bbf060f1ff149e71/conditions/q/"+zip+".json";
var forecastPath = "https://api.wunderground.com/api/bbf060f1ff149e71/forecast/q/"+zip+".json";
    // GET THE CONDITIONS
    weatherConditions.open('GET',conditionsPath , true);
    weatherConditions.responseType = 'text';
    weatherConditions.send(null);



    // GET THE FORECARST
    weatherForecast.open('GET', forecastPath, true);
    weatherForecast.responseType = 'text';
    weatherForecast.send();
}


weatherConditions.onload = function() {
    if (weatherConditions.status === 200) {
        cObj = JSON.parse(weatherConditions.responseText);
        console.log(cObj);
        document.getElementById("location").innerHTML = cObj.current_observation.display_location.full;
        document.getElementById("weather").innerHTML = cObj.current_observation.weather;
        document.getElementById("temperature").innerHTML = cObj.current_observation.temp_f;
    } //end if
}; //end function




weatherForecast.onload = function() {
    if (weatherForecast.status === 200) {
        fObj = JSON.parse(weatherForecast.responseText);
        console.log(fObj);
        document.getElementById("desc").innerHTML = fObj.forecast.txt_forecast.forecastday["0"].fcttext;
        //Day1
        document.getElementById("r1c1").innerHTML = fObj.forecast.simpleforecast.forecastday[1].date.weekday;
        document.getElementById("r1c3").innerHTML = fObj.forecast.simpleforecast.forecastday[1].high.fahrenheit + "'";
        document.getElementById("r1c4").innerHTML = fObj.forecast.simpleforecast.forecastday[1].low.fahrenheit + "'";
        var imagePath = fObj.forecast.simpleforecast.forecastday[1].icon_url;
        document.getElementById("r1c2").src = imagePath;
        //Day2
        document.getElementById("r2c1").innerHTML = fObj.forecast.simpleforecast.forecastday[2].date.weekday;
        document.getElementById("r2c3").innerHTML = fObj.forecast.simpleforecast.forecastday[2].high.fahrenheit + "'";
        document.getElementById("r2c4").innerHTML = fObj.forecast.simpleforecast.forecastday[2].low.fahrenheit + "'";
        imagePath = fObj.forecast.simpleforecast.forecastday[2].icon_url;
        document.getElementById("r2c2").src = imagePath;
        //Day3
        document.getElementById("r3c1").innerHTML = fObj.forecast.simpleforecast.forecastday[3].date.weekday;
        document.getElementById("r3c3").innerHTML = fObj.forecast.simpleforecast.forecastday[3].high.fahrenheit + "'";
        document.getElementById("r3c4").innerHTML = fObj.forecast.simpleforecast.forecastday[3].low.fahrenheit + "'";
        imagePath = fObj.forecast.simpleforecast.forecastday[3].icon_url;
        document.getElementById("r3c2").src = imagePath;
        //Day4
        document.getElementById("r4c1").innerHTML = fObj.forecast.simpleforecast.forecastday[4].date.weekday;
        document.getElementById("r4c3").innerHTML = fObj.forecast.simpleforecast.forecastday[4].high.fahrenheit + "'";
        document.getElementById("r4c4").innerHTML = fObj.forecast.simpleforecast.forecastday[4].low.fahrenheit + "'";
        imagePath = fObj.forecast.simpleforecast.forecastday[4].icon_url;
        document.getElementById("r4c2").src = imagePath;
        //Day5
        document.getElementById("r5c1").innerHTML = fObj.forecast.simpleforecast.forecastday[5].date.weekday;
        document.getElementById("r5c3").innerHTML = fObj.forecast.simpleforecast.forecastday[5].high.fahrenheit + "'";
        document.getElementById("r5c4").innerHTML = fObj.forecast.simpleforecast.forecastday[5].low.fahrenheit + "'";
        imagePath = fObj.forecast.simpleforecast.forecastday[5].icon_url;
        document.getElementById("r5c2").src = imagePath;
        //Day6
        document.getElementById("r6c1").innerHTML = fObj.forecast.simpleforecast.forecastday[6].date.weekday;
        document.getElementById("r6c3").innerHTML = fObj.forecast.simpleforecast.forecastday[6].high.fahrenheit + "'";
        document.getElementById("r6c4").innerHTML = fObj.forecast.simpleforecast.forecastday[6].low.fahrenheit + "'";
        imagePath = fObj.forecast.simpleforecast.forecastday[6].icon_url;
        document.getElementById("r6c2").src = imagePath;

    } //end if
}; //end function
loadWeather();
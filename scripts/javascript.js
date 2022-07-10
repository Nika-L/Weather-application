// Date and time ifo
let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "October",
  "December",
];
let day = days[date.getDay()];
let month = months[date.getMonth()];
let nowDate = date.getDate();
let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let time = `${hours}:${minutes}`;

let currentDay = document.querySelector("#current-day");
currentDay.innerHTML = day;
let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = time;
let currentMonth = document.querySelector("#current-month");
currentMonth.innerHTML = month;
let currentDate = document.querySelector("#current-date");
currentDate.innerHTML = nowDate;

// Current search weather info

function showTemperature(response) {
  let searchcity = response.data.name;
  let searchTemperature = Math.round(response.data.main.temp);
  let searchWeather = response.data.weather[0].description;

  let searchWind = Math.round(response.data.wind.speed);
  let searchHumidity = response.data.main.humidity;
  let cityName = document.querySelector("#current-city-value");
  cityName.innerHTML = searchcity;
  let temperatureNumber = document.querySelector("#current-temprature-now");
  temperatureNumber.innerHTML = searchTemperature;
  let weather = document.querySelector("#current-sky");
  weather.innerHTML =
    searchWeather.charAt(0).toUpperCase() + searchWeather.slice(1);
  let wind = document.querySelector("#current-wind");
  wind.innerHTML = searchWind;
  let humidity = document.querySelector("#current-humidity");
  humidity.innerHTML = searchHumidity;
}

function search(city) {
  let apiKey = "8d77851ee4e661d39914483344a94b0c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function showWeather(event) {
  event.preventDefault();
  let city = document.querySelector("#text-input").value;
  city = city.trim();
  search(city);
}

search("paris");

let searchCity = document.querySelector("#search-form");
searchCity = searchCity.addEventListener("submit", showWeather);

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "8d77851ee4e661d39914483344a94b0c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("#current-weather-btn");
button.addEventListener("click", getCurrentPosition);

// Bonus Feature
// function showFahrenheit(event) {
//   event.preventDefault();

//   temperature = Number(temperature);
//   tempratureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
// }

// function showCelsisus(event) {
//   event.preventDefault();
//   tempratureElement.innerHTML = temperature;
// }

// let tempratureElement = document.querySelector("#current-temprature-now");
// let temperature = tempratureElement.innerHTML;
// let fahrenheit = document.querySelector("#fahrenheit");
// fahrenheit = fahrenheit.addEventListener("click", showFahrenheit);
// let celsius = document.querySelector("#celsius");
// celsius = celsius.addEventListener("click", showCelsisus);

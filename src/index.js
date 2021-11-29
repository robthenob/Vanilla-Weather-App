function formatDate(timeStamp) {
  let date = new Date(timeStamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  console.log(response.data);
  celsiusTemperature = response.data.main.temp;
  let temperatureElement = document.querySelector("#degree");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  let cityElement = document.querySelector("#cityName");
  cityElement.innerHTML = response.data.name;
  let countryElement = document.querySelector("#country");
  countryElement.innerHTML = response.data.sys.country;
  let conditionElement = document.querySelector("#currentCondition");
  conditionElement.innerHTML = response.data.weather[0].description;
  let windSpeed = document.querySelector("#windSpeed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  let dateElement = document.querySelector("#currentDate");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city) {
  let apiKey = "0b44bb10c5ed254a363948e06377120f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let searchedCityElement = document.querySelector("#search-bar");
  search(searchedCityElement.value);
}

function displayFahrenheitTemp(event) {
  event.preventDefault();
  let fahrenheitTemp = (celsiusTemperature * 9) / 5 + 32;
  let degreeElement = document.querySelector("#degree");
  degreeElement.innerHTML = Math.round(fahrenheitTemp);
}
function displayCelsiusTemp(event) {
  event.preventDefault();
  let celsiusElement = document.querySelector("#degree");
  celsiusElement.innerHTML = Math.round(celsiusTemperature);
}

let form = document.querySelector("#searchForm");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheitUnit");
fahrenheitLink.addEventListener("click", displayFahrenheitTemp);

let celsiusLink = document.querySelector("#unit");
celsiusLink.addEventListener("click", displayCelsiusTemp);

celciusTemperature = null;

search("Vancouver");

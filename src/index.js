function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#degree");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#cityName");
  cityElement.innerHTML = response.data.name;
  let conditionElement = document.querySelector("#currentCondition");
  conditionElement.innerHTML = response.data.weather[0].description;
  let windSpeed = document.querySelector("#windSpeed");
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
}

let apiKey = "0b44bb10c5ed254a363948e06377120f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

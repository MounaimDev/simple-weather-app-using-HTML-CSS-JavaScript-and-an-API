const form = document.querySelector('form');
const searchBtn = document.querySelector('#search-btn');
const cityInput = document.querySelector('#city');
const weatherContainer = document.querySelector('#weather');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = cityInput.value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let temperature = data.main.temp;
      let weather = data.weather[0].description;
      weatherContainer.innerHTML = `Temperature: ${temperature}°F <br> Weather: ${weather}`;
    })
    .catch(error => {
      weatherContainer.innerHTML = "City not found. Please try again.";
    });
});
const defaultCity = "New York";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=YOUR_API_KEY`)
    .then(response => response.json())
    .then(data => {
      let temperature = data.main.temp;
      let weather = data.weather[0].description;
      weatherContainer.innerHTML = `Temperature: ${temperature}°F <br> Weather: ${weather}`;
    });

let now = new Date();
let h2 = document.querySelector("h2");

let date = now.getDate();
let days = ["Sun", "Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"];
let day = days[now.getDay()];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
h2.innerHTML = `${day} ${date} ${month}`;

let apiKey = "e40c055a1effd8e0f279895702ac2707";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";

function showTemperature(response) {
  let temperatureRound = Math.round(response.data.main.temp);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${temperatureRound}°C`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h3 = document.querySelector("h3");
  h3.innerHTML = `${searchInput.value}`;
}

//let form = document.querySelector(`#search-form`);
//form.addEventListener("submit", search);

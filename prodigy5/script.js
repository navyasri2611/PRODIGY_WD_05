// Example of dynamic weather change

const weatherData = [
  { type: "Thunder", temp: 23 },
  { type: "Sunny", temp: 28 },
  { type: "Rainy", temp: 19 },
  { type: "Cloudy", temp: 21 }
];

let index = 0;

setInterval(() => {
  index = (index + 1) % weatherData.length;

  document.getElementById("weatherType").textContent =
    weatherData[index].type;

  document.getElementById("temperature").textContent =
    weatherData[index].temp + "°";

}, 4000);

let weather = {
  "apiKey": "f419cd27b5d7777610c83ec9680dce19"
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=" 
      + city 
      + ",{state code},{country code}&limit={limit}&appid=" 
      + this.appKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = 
      "https://openweathermap.org/img/wn" + icon + "@.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
  }
};
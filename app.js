const _city = document.querySelector(".city")
const _icon = document.querySelector(".icon")
const _description = document.querySelector(".description")
const _temp = document.querySelector(".temp")
const _humidity = document.querySelector(".humidity")
const _wind = document.querySelector(".wind")
const searchButton = document.querySelector(".search button")
const searchBar =  document.querySelector(".search-bar")


let weather = {
    "apiKey": "37c2ff0ff9e28b1ed282381ebf2bb493",
    fetchWeather: function(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        _city.innerText = "Weather in " + name;
        _icon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        _description.innerText = description;
        _temp.innerText = `${Math.round(temp)}°C`;
        _humidity.innerText = `Humidity ${humidity}%`;
        _wind.innerText = `Wind Speed ${speed} km/h`;
},
    search: function () {
        this.fetchWeather(searchBar.value);
    }
}

searchButton.addEventListener("click", () => {
    weather.search();
})
searchBar.addEventListener("keyup", (e) => {
    if(e.key == "Enter"){
        weather.search();
    }
})
weather.fetchWeather("İzmir");
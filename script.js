let inputBox = document.getElementById("inputBox");
let countryName = document.getElementById("countryName");
let stateName = document.getElementById("stateName");
let cityName = document.getElementById("cityName");
let humidity = document.getElementById("humidity");
let windSpeed = document.getElementById("windSpeed");
let temperature = document.getElementById("temperature");
let logoImage = document.getElementById("logoImage");
let weatherStatus = document.getElementById("weatherStatus");
//we don't need to select the button because we are using a form with submit function

async function getData(event) {
  event.preventDefault(); //it prevents the submission of the form
  //event is the city name the user is writing
  //get data can ben a async func
  if (!inputBox.value) {
    //if it's not empty
    alert("Insert a city name");
    return; //there is no fetch data, return to the function, whatever is next return will not be executed
    //if we don't give the retunr, after the alert is going to display the data we don't use
  }
  const city = inputBox.value; //value is only for input elements
  const apiData = await fetch(
    //use const for api
    `https://api.weatherapi.com/v1/current.json?key=b312f71ed8734433b1b81149231202&q=${city}`
  );
  let data = await apiData.json(); //converting data in json
  //console.log(data);
  cityName.innerHTML = data.location.name;
  countryName.innerHTML = data.location.country;
  stateName.innerHTML = data.location.region;
  temperature.innerHTML = data.current.temp_c;
  humidity.innerHTML = data.current.humidity;
  windSpeed.innerHTML = data.current.wind_mph;
  logoImage.src = data.current.condition.icon;
  weatherStatus.innerHTML = data.current.condition.text;

  let container = document.getElementsByClassName("container");
  if (weatherStatus.innerHTML == "Sunny") {
    container[0].style.backgroundImage = `url( 
      "https://media.giphy.com/media/wNipYAoZ3iaEE/giphy.gif"
    )`;
  } else if (weatherStatus.innerHTML === "Rainy") {
    container[0].style.backgroundImage = `url(
      "https://media.giphy.com/media/xT9GEDhzERbjDD15O8/giphy.gif"
    )`;
    container[0].style.backgroundSize = "cover";
  } else if (
    weatherStatus.innerHTML === "Overcast" ||
    weatherStatus.innerHTML === "Clear"
  ) {
    container[0].style.backgroundImage = `url(
      "https://media.giphy.com/media/eebc0t8jYBNOYfchyY/giphy.gif"
    )`;
    container[0].style.backgroundSize = "cover";
    container[0].style.color = "black";
  } else {
    container[0].style.backgroundImage = `url(
      "https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif"
    )`;
    container[0].style.backgroundSize = "cover";
    container[0].style.color = "white";
  }
}

import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [city, setCity] = useState("");
  const [humidity, setHumidity] = useState("");
  const [temp, setTemp] = useState("");
  const [descripition, setDescripition] = useState("");
  const [wind, setWind] = useState("");

  const [display, setDisplay] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "b95f179627c8dd37f41e1be6e3250e19";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showWeather(response) {
    setDisplay(true);
    setTemp(Math.round(response.data.main.temp));
    setHumidity(Math.round(response.data.main.humidity));
    setDescripition(response.data.weather[0].main);
    setWind(Math.round(response.data.wind.speed));
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Type your city" onChange={updateCity} />
      <input type="submit" value="search" />
    </form>
  );
  if (display) {
    return (
      <div>
        {form}

        <ul>
          <li>Description : {descripition}</li>
          <li>Temperature : {temp}°C </li>
          <li>Humidity: {humidity} %</li>
          <li>Wind: {wind} Km/h</li>
        </ul>
        <br />
      </div>
    );
  } else {
    return form;
  }
}

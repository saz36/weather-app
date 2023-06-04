import React from "react";
import "./forecast.css";
import "./styles.css";

export default function Forecast() {
  return (
    <div className="row my-3">
      <div className="col-4">
        <ul>
          <li className="wind">Wind: </li>
          <li className="Humidity"> Humidity:</li>
        </ul>
      </div>
      <div className="col-4">
        <strong className="temp">Temperature: °C</strong>

        <div className="description"></div>
      </div>
      <div className="col-4">
        <ul className="sun">
          <li className="Sunrise">Sunrise: 06:30</li>
          <li className="Sunset">Sunset: 20.00</li>
        </ul>
      </div>
    </div>
  );
}

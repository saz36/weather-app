import React from "react";
import "./forecast.css";
import Sun from "./sun";

export default function Forecast() {
  return (
    <div class="row my-3">
      <div class="col-4">
        <ul>
          <li className="wind">Wind: </li>
          <li className="Humidity"> Humidity:</li>
        </ul>
      </div>
      <div class="col-4">
        <div className="temp">Temperature:</div>
      </div>
      <div class="col-4">
        <Sun />
      </div>
    </div>
  );
}

import React from "react";

import "./forecast.css";
import Wind from "./wind";
import Humidity from "./humidity";
import Temperature from "./temperature";
import Sun from "./sun";

export default function Forecast() {
  return (
    <div>
      <div className="information">wind Humidity</div>
      <div>
        <span className="temp">Temperature</span>
        <div className="sun">Sun</div>
      </div>
    </div>
  );
}

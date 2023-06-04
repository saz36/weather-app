import React from "react";

import "./sun.css";

export default function Sun() {
  return (
    <ul className="sun">
      <li>
        Sunrise: <span id="Sunrise">06:30</span>
      </li>
      <li>
        Sunset: <span id="Sunset">20.00</span>
      </li>
    </ul>
  );
}

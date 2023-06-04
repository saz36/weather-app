import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./weather";
import reportWebVitals from "./reportWebVitals";

import Form from "./form";
import Results from "./results";
import Date from "./date";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="weather-app">
      <div class="container">
        <h1>weather</h1>

        <Form />
        <div class="row my-4 ">
          <div class="col-5">
            <Results />
          </div>
          <div class="col-5">
            <Date />
          </div>
        </div>
        <div class="row my-3">
          <div class="col-4">
            <div className="info">Wind Humidity</div>
          </div>
          <div class="col-4">
            <div className="temp">Temp 19</div>
          </div>
          <div class="col-4">Sun</div>
        </div>
      </div>
    </div>
    <Weather />
  </React.StrictMode>
);
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Form from "./form";
import Results from "./results";
import Date from "./date";
import Forecast from "./forecast";
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
        <Forecast />
      </div>
    </div>
  </React.StrictMode>
);
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "./form";
import Results from "./results";
import Date from "./date";
import Forecast from "./forecast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="weather-app">
      <div className="container">
        <h1>weather</h1>

        <Form />
        <div className="row my-4 ">
          <div className="col-5 mx-2">
            <Results />
          </div>
          <div className="col-5 mx-2">
            <Date />
          </div>
        </div>
        <Forecast />
      </div>
    </div>
    <div>
      <a
        href="https://github.com/saz36/weather-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        open source code
      </a>
    </div>
  </React.StrictMode>
);
reportWebVitals();

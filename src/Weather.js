import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1> Los Angeles, CA </h1>
      <ul>
        <li>Monday 12:00 PM</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
            />

            <span className="temperature"> 71 </span>
            <span className="unit">°F |°C</span>
          </div>
        </div>

        <div className="col-6">
          <div className="d-flex justify-content-end ">
            <ul>
              <li>Precipitation: 0% </li>
              <li> Wind: 4 mph </li>
              <li> Humidity: 35% </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

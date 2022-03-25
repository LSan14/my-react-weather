import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">°F |°C</span>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-end ">
            <ul>
              <li> Wind: {Math.round(props.data.windy)} mph </li>
              <li> Humidity: {props.data.humidity}% </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

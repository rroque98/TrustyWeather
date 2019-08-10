import "./ForecastList.css";
import React from "react";
import ForecastDay from "../ForecastDay";

const ForecastList = ({
  fiveDayForecast,
  convertCelsiusToFaren,
  determineDayOfWeek
}) => {
  return (
    <article className="forecastListContainer">
      {fiveDayForecast
        ? fiveDayForecast.map(day => (
            <ForecastDay
              day={day}
              key={day.id}
              convertCelsiusToFaren={convertCelsiusToFaren}
              determineDayOfWeek={determineDayOfWeek}
            />
          ))
        : null}
    </article>
  );
};

export default ForecastList;

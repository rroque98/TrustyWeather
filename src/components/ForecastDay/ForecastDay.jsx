import React from "react";

const ForecastDay = ({ day, convertCelsiusToFaren, determineDayOfWeek }) => {
  return (
    <section className="dayContainer">
      <div>{determineDayOfWeek(day.applicable_date)}</div>
      <img
        src={`https://www.metaweather.com/static/img/weather/ico/${day.weather_state_abbr}.ico`}
      />
      <div>{day.weather_state_name}</div>
      <div>{`High: ${Math.round(
        convertCelsiusToFaren(+day.max_temp)
      )}\xB0F`}</div>
      <div>{`Low: ${Math.round(
        convertCelsiusToFaren(+day.min_temp)
      )}\xB0F`}</div>
      <div>{`${day.wind_direction_compass} ${Math.round(
        day.wind_speed
      )} MPH`}</div>
      <div>{`Air pressure:${day.air_pressure} in`}</div>
      <div>{day.humidity}%</div>
      <div>{`Visibility: ${Math.round(day.visibility)} mi`}</div>
    </section>
  );
};

export default ForecastDay;

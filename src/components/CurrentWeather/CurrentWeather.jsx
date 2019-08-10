import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({
  currWeather,
  convertCelsiusToFaren,
  determineDayOfWeek
}) => {
  return (
    <React.Fragment>
      {currWeather ? (
        <article className="currWeatherContainer">
          <section className="mainLeft">
            <div className="todayDay">
              {determineDayOfWeek(currWeather.applicable_date)}
            </div>
            <div className="todayTemp">
              {Math.round(convertCelsiusToFaren(+currWeather.the_temp)) +
                "\xB0F"}
            </div>
          </section>

          <section className="mainMiddle">
            <img
              src={`https://www.metaweather.com/static/img/weather/ico/${currWeather.weather_state_abbr}.ico`}
            />
            <div>{currWeather.weather_state_name}</div>
          </section>

          <section className="mainRight">
            <div>{`High: ${Math.round(
              convertCelsiusToFaren(+currWeather.max_temp)
            )}\xB0F`}</div>
            <div>{`Low: ${Math.round(
              convertCelsiusToFaren(+currWeather.min_temp)
            )}\xB0F`}</div>
            <div>{`${currWeather.wind_direction_compass} ${Math.round(
              currWeather.wind_speed
            )} MPH`}</div>
            <div>{`Air pressure:${Math.round(
              currWeather.air_pressure
            )} in`}</div>
            <div>{currWeather.humidity}%</div>
            <div>{`Visibility: ${Math.round(currWeather.visibility)} mi`}</div>
          </section>
        </article>
      ) : null}
    </React.Fragment>
  );
};

export default CurrentWeather;

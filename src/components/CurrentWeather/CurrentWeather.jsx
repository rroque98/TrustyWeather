import React from "react";

const CurrentWeather = ({
  currWeather,
  convertCelsiusToFaren,
  determineDayOfWeek
}) => {
  return (
    <article className="currWeatherContainer">
      {currWeather ? (
        <section>
          <img
            src={`https://www.metaweather.com/static/img/weather/ico/${currWeather.weather_state_abbr}.ico`}
          />
          <div>
            {Math.round(convertCelsiusToFaren(+currWeather.the_temp)) + "\xB0F"}
          </div>
          <div>{determineDayOfWeek(currWeather.applicable_date)}</div>
          <div>{currWeather.weather_state_name}</div>
          <div>{`High: ${Math.round(
            convertCelsiusToFaren(+currWeather.max_temp)
          )}\xB0F`}</div>
          <div>{`Low: ${Math.round(
            convertCelsiusToFaren(+currWeather.min_temp)
          )}\xB0F`}</div>
          <div>{`${currWeather.wind_direction_compass} ${Math.round(
            currWeather.wind_speed
          )} MPH`}</div>
          <div>{`Air pressure:${currWeather.air_pressure} in`}</div>
          <div>{currWeather.humidity}%</div>
          <div>{`Visibility: ${Math.round(currWeather.visibility)} mi`}</div>
        </section>
      ) : null}
    </article>
  );
};

export default CurrentWeather;

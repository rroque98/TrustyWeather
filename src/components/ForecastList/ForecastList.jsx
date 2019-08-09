import React from "react";
import ForecastDay from "../ForecastDay";

const ForecastList = ({ fiveDayForecast }) => {
  return (
    <section>
      {fiveDayForecast
        ? fiveDayForecast.map(day => <ForecastDay day={day} key={day.id} />)
        : null}
    </section>
  );
};

export default ForecastList;

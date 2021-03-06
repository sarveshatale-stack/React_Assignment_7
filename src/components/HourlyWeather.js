import React, { useState, useEffect } from "react";
import HourlyWeatherForecast from "./HourlyWeatherForecast";

function HourlyWeather(props) {
  const [hourlyWeather, setHourlyWeather] = useState([]);
  useEffect(() => {
    if (props.value.hourly.length > 0) {
      setHourlyWeather(props.value.hourly);
    }
  }, [props.value.hourly.length]);

  return (
    <div style={{ display: "flex", flex: 1, overflow: "auto" }}>
      <div style={{ display: "flex" }}>
        {hourlyWeather.map((item, index) => {
          return (
            <HourlyWeatherForecast
              key={index}
              value={item}
            ></HourlyWeatherForecast>
          );
        })}
      </div>
    </div>
  );
}

export default HourlyWeather;

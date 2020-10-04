import React, { useEffect, useState } from "react";
import DailyWeatherForecast from "./DailyWeatherForecast";

function DailyWeather(props) {
  const [dailyWeather, setDailyWeather] = useState([]);
  useEffect(() => {
    console.dir(dailyWeather);
    if (props.value.daily.length > 0) {
      setDailyWeather(props.value.daily);
    }
  }, [props.value.daily.length]);

  return (
    <div style={{ display: "flex", flex: 1, overflow: "auto" }}>
      <div style={{ display: "flex" }}>
        {dailyWeather.map((item, index) => {
          return (
            <DailyWeatherForecast
              key={index}
              value={item}
            ></DailyWeatherForecast>
          );
        })}
      </div>
    </div>
  );
}

export default DailyWeather;

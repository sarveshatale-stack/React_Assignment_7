import React, { useEffect, useState } from "react";
import WeatherService from "./Service/WeatherService";

function DailyWeatherForecast(props) {
  //console.dir(props.value);
  const [dailyWeather, setDailyWeather] = useState({
    date: "",
    dayTemp: "",
    nightTemp: "",
    mainWeather: "",
    icon: ""
  });
  useEffect(() => {
    if (props.value.dt) {
      let objWeatherService = new WeatherService();
      setDailyWeather({
        date: String(
          objWeatherService.unixTimestampToDate(props.value.dt).date
        ),
        dayTemp: props.value.temp.day,
        nightTemp: props.value.temp.night,
        mainWeather: props.value.weather[0].main,
        icon: `http://openweathermap.org/img/wn/${props.value.weather[0].icon}.png`
      });
    }
  }, [props.value]);

  return (
    <div style={{ width: "100px" }}>
      <span style={{ fontSize: "14px" }}>
        {dailyWeather.date
          ? `${dailyWeather.date.split(" ")[0]} ${
              dailyWeather.date.split(" ")[2]
            }`
          : ""}
      </span>
      <br></br>
      <span>
        <img src={dailyWeather.icon} alt="Logo" />
      </span>
      <br></br>
      <span style={{ fontWeight: "bold" }}>
        {Math.round(dailyWeather.dayTemp)} °
      </span>
      &nbsp;&nbsp;&nbsp;
      <span style={{ fontSize: "12px" }}>
        {Math.round(dailyWeather.nightTemp)} °
      </span>
      <br></br>
      <span style={{ fontSize: "14px" }}>{dailyWeather.mainWeather}</span>
    </div>
  );
}

export default DailyWeatherForecast;

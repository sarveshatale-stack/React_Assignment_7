import React, { useEffect, useState } from "react";
import WeatherService from "./Service/WeatherService";

function CurrentWeather(props) {
  var flag = false;
  const [currentWeather, setCurrent] = useState({
    location: "",
    minTemp: "",
    maxTemp: "",
    currentTemp: "",
    mainWeather: "",
    icon: ""
  });

  useEffect(() => {
    if (props.value.daily.length > 0) {
      let objWeatherService = new WeatherService();
      setCurrent({
        location: props.value.city,
        currentDT: objWeatherService.unixTimestampToDate(props.value.current.dt)
          .time,
        minTemp: props.value.daily[0].temp.min,
        maxTemp: props.value.daily[0].temp.max,
        currentTemp: props.value.current.temp,
        mainWeather: props.value.current.weather[0].main,
        icon: `http://openweathermap.org/img/wn/${props.value.current.weather[0].icon}.png`
      });
    }
  }, [props.value.daily]);

  return (
    <>
      <span style={{ fontWeight: "bold" }}>{currentWeather.location}</span>
      <br></br>
      <span>
        {" "}
        {Math.round(currentWeather.minTemp)}° |{" "}
        {Math.round(currentWeather.maxTemp)}°
      </span>
      <h2>
        {currentWeather.currentTemp} ° <sup>c</sup>
      </h2>
      <div>
        <img src={currentWeather.icon} alt="Logo" />
        <span>{currentWeather.mainWeather}</span>
      </div>
      <span style={{ fontSize: "14px" }}>
        updated as of{" "}
        {currentWeather.currentDT
          ? `${currentWeather.currentDT.split(":")[0]}:${
              currentWeather.currentDT.split(":")[1]
            }`
          : ""}{" "}
        &nbsp;&nbsp;
        <a
          onClick={() => {
            props.callBack(true);
          }}
          style={{ color: "green", cursor: "pointer", fontSize: "18px" }}
        >
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </a>
      </span>
    </>
  );
}

export default CurrentWeather;

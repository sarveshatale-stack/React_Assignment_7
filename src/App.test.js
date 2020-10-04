import React from "react";
import App from "./App";
import WeatherDashboard from "./components/WeatherDashboard";
import CurrentWeather from "./components/CurrentWeather";
import DailyWeather from "./components/DailyWeather";
import ReactDOM from "react-dom";

it("Weather App", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WeatherDashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("Weather App", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});

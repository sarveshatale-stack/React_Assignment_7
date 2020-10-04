import React from "react";
import axios from "axios";

//const API_KEY = 'API_KEY'
const API_KEY = "b12f8219ae2e85a290af72189d4e1367";
class WeatherService {
  GetWeatherReportByLatLong = (latLong, callback) => {
    // callback(res);
    // return;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latLong.lat}&lon=${latLong.long}&appid=${API_KEY}&exclude=minutely&units=metric`
      )
      .then(function (response) {
        callback(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          if (error.response.status === 404) {
            callback(`\u2014`);
          } else {
            callback(error.response);
          }
        }
      });
  };

  UnixTimeStampToTime01 = (unix_timestamp, callback) => {
    //let unix_timestamp = 1601730000
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    //console.log(formattedTime);console.log(date);
    callback({
      date: date,
      time: hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)
    });
  };

  unixTimestampToDate = (unix_timestamp) => {
    //let unix_timestamp = 1601730000
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(unix_timestamp * 1000);
    // Hours part from the timestamp
    var hours = date.getHours();
    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    var seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    var formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    //console.log(formattedTime);console.log(date);
    return {
      date: date,
      time: hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)
    };
  };
}

const res = {
  lat: 33.44,
  lon: -94.04,
  timezone: "America/Chicago",
  timezone_offset: -18000,
  current: {
    dt: 1601717907,
    sunrise: 1601727127,
    sunset: 1601769460,
    temp: 284.04,
    feels_like: 281.83,
    pressure: 1020,
    humidity: 76,
    dew_point: 279.98,
    uvi: 6.18,
    clouds: 1,
    visibility: 10000,
    wind_speed: 2.1,
    wind_deg: 110,
    weather: [{ id: 800, main: "Clear", description: "clear sky", icon: "01n" }]
  },
  hourly: [
    {
      dt: 1601715600,
      temp: 284.04,
      feels_like: 281.51,
      pressure: 1020,
      humidity: 76,
      dew_point: 279.98,
      clouds: 1,
      visibility: 10000,
      wind_speed: 2.56,
      wind_deg: 120,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601719200,
      temp: 283.74,
      feels_like: 281.2,
      pressure: 1020,
      humidity: 75,
      dew_point: 279.5,
      clouds: 1,
      visibility: 10000,
      wind_speed: 2.42,
      wind_deg: 120,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601722800,
      temp: 283.37,
      feels_like: 280.73,
      pressure: 1020,
      humidity: 75,
      dew_point: 279.14,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.46,
      wind_deg: 134,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601726400,
      temp: 283.03,
      feels_like: 280.65,
      pressure: 1021,
      humidity: 75,
      dew_point: 278.81,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.98,
      wind_deg: 136,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601730000,
      temp: 283.9,
      feels_like: 281.37,
      pressure: 1021,
      humidity: 75,
      dew_point: 279.65,
      clouds: 48,
      visibility: 10000,
      wind_speed: 2.45,
      wind_deg: 126,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      pop: 0
    },
    {
      dt: 1601733600,
      temp: 286.55,
      feels_like: 283.44,
      pressure: 1022,
      humidity: 68,
      dew_point: 280.93,
      clouds: 28,
      visibility: 10000,
      wind_speed: 3.65,
      wind_deg: 140,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      pop: 0
    },
    {
      dt: 1601737200,
      temp: 288.94,
      feels_like: 285.94,
      pressure: 1021,
      humidity: 63,
      dew_point: 281.98,
      clouds: 18,
      visibility: 10000,
      wind_speed: 3.89,
      wind_deg: 154,
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      pop: 0
    },
    {
      dt: 1601740800,
      temp: 291.39,
      feels_like: 288.36,
      pressure: 1020,
      humidity: 56,
      dew_point: 282.56,
      clouds: 21,
      visibility: 10000,
      wind_speed: 4.13,
      wind_deg: 156,
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      pop: 0
    },
    {
      dt: 1601744400,
      temp: 293.42,
      feels_like: 290.5,
      pressure: 1020,
      humidity: 51,
      dew_point: 282.99,
      clouds: 25,
      visibility: 10000,
      wind_speed: 4.16,
      wind_deg: 162,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      pop: 0
    },
    {
      dt: 1601748000,
      temp: 294.56,
      feels_like: 292.03,
      pressure: 1019,
      humidity: 49,
      dew_point: 283.43,
      clouds: 37,
      visibility: 10000,
      wind_speed: 3.77,
      wind_deg: 166,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      pop: 0
    },
    {
      dt: 1601751600,
      temp: 295.82,
      feels_like: 293.53,
      pressure: 1018,
      humidity: 46,
      dew_point: 283.76,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.51,
      wind_deg: 169,
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1601755200,
      temp: 296.53,
      feels_like: 294.32,
      pressure: 1018,
      humidity: 45,
      dew_point: 283.98,
      clouds: 79,
      visibility: 10000,
      wind_speed: 3.53,
      wind_deg: 168,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1601758800,
      temp: 296.82,
      feels_like: 294.88,
      pressure: 1017,
      humidity: 45,
      dew_point: 284.4,
      clouds: 72,
      visibility: 10000,
      wind_speed: 3.25,
      wind_deg: 171,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1601762400,
      temp: 296.58,
      feels_like: 295.37,
      pressure: 1017,
      humidity: 49,
      dew_point: 285.3,
      clouds: 60,
      visibility: 10000,
      wind_speed: 2.65,
      wind_deg: 174,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1601766000,
      temp: 294.97,
      feels_like: 294.61,
      pressure: 1016,
      humidity: 59,
      dew_point: 286.77,
      clouds: 48,
      visibility: 10000,
      wind_speed: 2.05,
      wind_deg: 162,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      pop: 0
    },
    {
      dt: 1601769600,
      temp: 291.58,
      feels_like: 290.79,
      pressure: 1017,
      humidity: 64,
      dew_point: 284.79,
      clouds: 40,
      visibility: 10000,
      wind_speed: 1.79,
      wind_deg: 163,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      pop: 0
    },
    {
      dt: 1601773200,
      temp: 290.48,
      feels_like: 289.45,
      pressure: 1018,
      humidity: 66,
      dew_point: 284.13,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.9,
      wind_deg: 163,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601776800,
      temp: 289.94,
      feels_like: 288.88,
      pressure: 1018,
      humidity: 67,
      dew_point: 283.8,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.83,
      wind_deg: 167,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601780400,
      temp: 289.71,
      feels_like: 288.32,
      pressure: 1019,
      humidity: 67,
      dew_point: 283.68,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.21,
      wind_deg: 172,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601784000,
      temp: 289.36,
      feels_like: 287.65,
      pressure: 1019,
      humidity: 68,
      dew_point: 283.63,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.62,
      wind_deg: 167,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601787600,
      temp: 288.91,
      feels_like: 286.87,
      pressure: 1019,
      humidity: 70,
      dew_point: 283.53,
      clouds: 0,
      visibility: 10000,
      wind_speed: 3.09,
      wind_deg: 167,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601791200,
      temp: 288.56,
      feels_like: 286.81,
      pressure: 1019,
      humidity: 71,
      dew_point: 283.5,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.63,
      wind_deg: 178,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601794800,
      temp: 288.11,
      feels_like: 287.13,
      pressure: 1019,
      humidity: 73,
      dew_point: 283.51,
      clouds: 0,
      visibility: 10000,
      wind_speed: 1.52,
      wind_deg: 191,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0.2
    },
    {
      dt: 1601798400,
      temp: 288.2,
      feels_like: 286.78,
      pressure: 1019,
      humidity: 74,
      dew_point: 283.65,
      clouds: 21,
      visibility: 10000,
      wind_speed: 2.27,
      wind_deg: 299,
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02n" }
      ],
      pop: 0.16
    },
    {
      dt: 1601802000,
      temp: 288.49,
      feels_like: 287.34,
      pressure: 1019,
      humidity: 74,
      dew_point: 284,
      clouds: 47,
      visibility: 10000,
      wind_speed: 1.99,
      wind_deg: 320,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      pop: 0.16
    },
    {
      dt: 1601805600,
      temp: 287.49,
      feels_like: 286.58,
      pressure: 1019,
      humidity: 80,
      dew_point: 284.17,
      clouds: 48,
      visibility: 10000,
      wind_speed: 1.73,
      wind_deg: 332,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      pop: 0.16
    },
    {
      dt: 1601809200,
      temp: 286.99,
      feels_like: 286.56,
      pressure: 1019,
      humidity: 84,
      dew_point: 284.49,
      clouds: 39,
      visibility: 10000,
      wind_speed: 1.15,
      wind_deg: 328,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      pop: 0.13
    },
    {
      dt: 1601812800,
      temp: 287.18,
      feels_like: 287.46,
      pressure: 1019,
      humidity: 84,
      dew_point: 284.66,
      clouds: 35,
      visibility: 10000,
      wind_speed: 0.21,
      wind_deg: 128,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n"
        }
      ],
      pop: 0.09
    },
    {
      dt: 1601816400,
      temp: 288.53,
      feels_like: 288.5,
      pressure: 1020,
      humidity: 80,
      dew_point: 285.23,
      clouds: 90,
      visibility: 10000,
      wind_speed: 0.9,
      wind_deg: 170,
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      pop: 0.1
    },
    {
      dt: 1601820000,
      temp: 289.02,
      feels_like: 288.81,
      pressure: 1021,
      humidity: 79,
      dew_point: 285.55,
      clouds: 95,
      visibility: 10000,
      wind_speed: 1.29,
      wind_deg: 176,
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      pop: 0.05
    },
    {
      dt: 1601823600,
      temp: 291.2,
      feels_like: 291.46,
      pressure: 1021,
      humidity: 71,
      dew_point: 286.06,
      clouds: 86,
      visibility: 10000,
      wind_speed: 0.83,
      wind_deg: 52,
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      pop: 0.01
    },
    {
      dt: 1601827200,
      temp: 292.71,
      feels_like: 292.1,
      pressure: 1021,
      humidity: 64,
      dew_point: 285.73,
      clouds: 85,
      visibility: 10000,
      wind_speed: 2,
      wind_deg: 34,
      weather: [
        { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1601830800,
      temp: 294.65,
      feels_like: 293.16,
      pressure: 1021,
      humidity: 55,
      dew_point: 285.36,
      clouds: 78,
      visibility: 10000,
      wind_speed: 3.04,
      wind_deg: 18,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1601834400,
      temp: 295.93,
      feels_like: 293.98,
      pressure: 1021,
      humidity: 48,
      dew_point: 284.41,
      clouds: 73,
      visibility: 10000,
      wind_speed: 3.33,
      wind_deg: 16,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      pop: 0
    },
    {
      dt: 1601838000,
      temp: 296.79,
      feels_like: 294.33,
      pressure: 1021,
      humidity: 42,
      dew_point: 283.28,
      clouds: 32,
      visibility: 10000,
      wind_speed: 3.56,
      wind_deg: 15,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      pop: 0
    },
    {
      dt: 1601841600,
      temp: 297.09,
      feels_like: 294.27,
      pressure: 1020,
      humidity: 40,
      dew_point: 282.8,
      clouds: 16,
      visibility: 10000,
      wind_speed: 3.9,
      wind_deg: 14,
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      pop: 0
    },
    {
      dt: 1601845200,
      temp: 296.84,
      feels_like: 293.95,
      pressure: 1020,
      humidity: 41,
      dew_point: 282.85,
      clouds: 11,
      visibility: 10000,
      wind_speed: 4.06,
      wind_deg: 12,
      weather: [
        { id: 801, main: "Clouds", description: "few clouds", icon: "02d" }
      ],
      pop: 0
    },
    {
      dt: 1601848800,
      temp: 296.11,
      feels_like: 293.72,
      pressure: 1020,
      humidity: 47,
      dew_point: 284.32,
      clouds: 8,
      visibility: 10000,
      wind_speed: 3.89,
      wind_deg: 9,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      pop: 0
    },
    {
      dt: 1601852400,
      temp: 293.99,
      feels_like: 292.17,
      pressure: 1020,
      humidity: 56,
      dew_point: 285.04,
      clouds: 6,
      visibility: 10000,
      wind_speed: 3.37,
      wind_deg: 7,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      pop: 0
    },
    {
      dt: 1601856000,
      temp: 290.67,
      feels_like: 288.52,
      pressure: 1020,
      humidity: 62,
      dew_point: 283.5,
      clouds: 6,
      visibility: 10000,
      wind_speed: 3.19,
      wind_deg: 13,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601859600,
      temp: 289.1,
      feels_like: 286.96,
      pressure: 1021,
      humidity: 65,
      dew_point: 282.59,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.89,
      wind_deg: 27,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601863200,
      temp: 288.25,
      feels_like: 286.08,
      pressure: 1022,
      humidity: 66,
      dew_point: 281.96,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.71,
      wind_deg: 30,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601866800,
      temp: 287.38,
      feels_like: 285.07,
      pressure: 1022,
      humidity: 69,
      dew_point: 281.81,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.85,
      wind_deg: 41,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601870400,
      temp: 286.5,
      feels_like: 284.29,
      pressure: 1023,
      humidity: 73,
      dew_point: 281.77,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.7,
      wind_deg: 53,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601874000,
      temp: 285.67,
      feels_like: 283.44,
      pressure: 1023,
      humidity: 77,
      dew_point: 281.79,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.73,
      wind_deg: 58,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601877600,
      temp: 285.08,
      feels_like: 282.82,
      pressure: 1022,
      humidity: 80,
      dew_point: 281.75,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.77,
      wind_deg: 67,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601881200,
      temp: 284.45,
      feels_like: 282.12,
      pressure: 1023,
      humidity: 82,
      dew_point: 281.58,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.78,
      wind_deg: 63,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    },
    {
      dt: 1601884800,
      temp: 283.8,
      feels_like: 281.44,
      pressure: 1023,
      humidity: 85,
      dew_point: 281.51,
      clouds: 0,
      visibility: 10000,
      wind_speed: 2.79,
      wind_deg: 59,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01n" }
      ],
      pop: 0
    }
  ],
  daily: [
    {
      dt: 1601748000,
      sunrise: 1601727127,
      sunset: 1601769460,
      temp: {
        day: 293.89,
        min: 283.51,
        max: 296.72,
        night: 289.71,
        eve: 291.58,
        morn: 283.51
      },
      feels_like: { day: 291.28, night: 288.32, eve: 290.79, morn: 281.23 },
      pressure: 1019,
      humidity: 50,
      dew_point: 283.1,
      wind_speed: 3.77,
      wind_deg: 166,
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d"
        }
      ],
      clouds: 35,
      pop: 0,
      uvi: 6.18
    },
    {
      dt: 1601834400,
      sunrise: 1601813569,
      sunset: 1601855780,
      temp: {
        day: 295.93,
        min: 287.18,
        max: 296.84,
        night: 287.38,
        eve: 290.67,
        morn: 287.18
      },
      feels_like: { day: 293.98, night: 285.07, eve: 288.52, morn: 287.46 },
      pressure: 1021,
      humidity: 48,
      dew_point: 284.41,
      wind_speed: 3.33,
      wind_deg: 16,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: 73,
      pop: 0.16,
      uvi: 6.47
    },
    {
      dt: 1601920800,
      sunrise: 1601900012,
      sunset: 1601942100,
      temp: {
        day: 293.1,
        min: 282.13,
        max: 294.98,
        night: 287.43,
        eve: 289.67,
        morn: 282.13
      },
      feels_like: { day: 291.03, night: 285.37, eve: 288.65, morn: 279.94 },
      pressure: 1023,
      humidity: 50,
      dew_point: 282.54,
      wind_speed: 2.73,
      wind_deg: 86,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: 0,
      pop: 0,
      uvi: 6.54
    },
    {
      dt: 1602007200,
      sunrise: 1601986455,
      sunset: 1602028421,
      temp: {
        day: 298.08,
        min: 283.88,
        max: 299.81,
        night: 291.12,
        eve: 293.36,
        morn: 283.88
      },
      feels_like: { day: 298.1, night: 290.3, eve: 292.46, morn: 282.95 },
      pressure: 1019,
      humidity: 45,
      dew_point: 285.46,
      wind_speed: 0.93,
      wind_deg: 168,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: 0,
      pop: 0,
      uvi: 6.31
    },
    {
      dt: 1602093600,
      sunrise: 1602072899,
      sunset: 1602114742,
      temp: {
        day: 300.44,
        min: 287.92,
        max: 301.07,
        night: 293.33,
        eve: 295.06,
        morn: 287.92
      },
      feels_like: { day: 301.19, night: 293.94, eve: 295.8, morn: 287.01 },
      pressure: 1018,
      humidity: 46,
      dew_point: 288.09,
      wind_speed: 1.06,
      wind_deg: 158,
      weather: [
        { id: 800, main: "Clear", description: "clear sky", icon: "01d" }
      ],
      clouds: 10,
      pop: 0,
      uvi: 6.55
    },
    {
      dt: 1602180000,
      sunrise: 1602159343,
      sunset: 1602201064,
      temp: {
        day: 300.63,
        min: 290.47,
        max: 300.89,
        night: 293.12,
        eve: 295.76,
        morn: 290.47
      },
      feels_like: { day: 300.59, night: 293.15, eve: 295.59, morn: 291.08 },
      pressure: 1019,
      humidity: 53,
      dew_point: 290.35,
      wind_speed: 3.48,
      wind_deg: 82,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: 76,
      pop: 0,
      uvi: 6.3
    },
    {
      dt: 1602266400,
      sunrise: 1602245787,
      sunset: 1602287386,
      temp: {
        day: 298.33,
        min: 289.03,
        max: 300.02,
        night: 290.7,
        eve: 294.21,
        morn: 289.03
      },
      feels_like: { day: 296.96, night: 288.83, eve: 292.53, morn: 287.34 },
      pressure: 1018,
      humidity: 43,
      dew_point: 285.21,
      wind_speed: 2.72,
      wind_deg: 73,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: 76,
      pop: 0,
      uvi: 6.37
    },
    {
      dt: 1602352800,
      sunrise: 1602332231,
      sunset: 1602373709,
      temp: {
        day: 299.11,
        min: 287.3,
        max: 300.94,
        night: 296.07,
        eve: 296.07,
        morn: 287.3
      },
      feels_like: { day: 299.98, night: 296.53, eve: 296.53, morn: 285.55 },
      pressure: 1016,
      humidity: 58,
      dew_point: 290.28,
      wind_speed: 2.19,
      wind_deg: 48,
      weather: [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" }
      ],
      clouds: 61,
      pop: 0.01,
      uvi: 5.86
    }
  ]
};

export default WeatherService;

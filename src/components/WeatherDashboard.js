import React, {useState, useEffect} from 'react'
import CurrentWeather from './CurrentWeather'
import WeatherHeader from './WeatherHeader'
import DailyWeather from './DailyWeather'
import HourlyWeather from './HourlyWeather'
import WeatherService from './Service/WeatherService'
import GeoLocationService from './Service/GeoLocationService'



function WeatherDashboard()
{
    let geoLoc = { lat : '', long : '', city : '' };
    const [location, setLocation] = useState(geoLoc);
    const [weather, setWeather] = useState({current : {}, hourly : [], daily : [], city : ''});
    //const [reload, setReload] = useState(false);
    let count = 0;
    useEffect(()=>{
        PopulateWeatherData();
        // navigator.geolocation.getCurrentPosition(function(position) {
        //     if(position)
        //     {
        //         setLocation({ lat : position.coords.latitude, long : position.coords.longitude }) 
        //         //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&sensor=false&key=apikey
        //         const objWeatherService = new  WeatherService();
        //         objWeatherService.GetWeatherReportByLatLong({ lat : position.coords.latitude, long : position.coords.longitude }, 
        //             (response)=>{
        //                 count++;
        //                 setWeather({current : response.current, hourly : response.hourly, daily : response.daily});
        //         });
        //     }
        // });
    }, [weather.daily.length, location.city]);

    const PopulateWeatherData = (val)=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            if(position)
            {
                setLocation({ lat : position.coords.latitude, long : position.coords.longitude, city : location.city }) 
                
                const objWeatherService = new  WeatherService();
                objWeatherService.GetWeatherReportByLatLong({ lat : position.coords.latitude, long : position.coords.longitude }, 
                    (response)=>{
                        count++;
                        setWeather({current : response.current, hourly : response.hourly, daily : response.daily, city : location.city });
                        const objGeoLocationService = new GeoLocationService();
                        objGeoLocationService.GetLocationDetailsByLatLong({ lat : position.coords.latitude, long : position.coords.longitude },
                            (res)=>{
                                if(res.city)
                                {
                                    setLocation({ lat : position.coords.latitude, long : position.coords.longitude, city : res.city});
                                    setWeather({current : response.current, hourly : response.hourly, daily : response.daily, city : res.city});
                                }
                            })
                });
            }
        });
    }
    
    return(<>
        <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-8">
                <div className="card">
                    <WeatherHeader></WeatherHeader>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <CurrentWeather callBack={(val)=> PopulateWeatherData(val)} value={ { current : weather.current, daily : weather.daily, city : weather.city }}></CurrentWeather>
                        </li>
                        <li className="list-group-item">
                            <h5>Daily</h5>
                            <DailyWeather  value={ { daily : weather.daily }}></DailyWeather>
                        </li>
                        <li className="list-group-item">
                            <h5>Hourly</h5>
                            <HourlyWeather value={ { hourly : weather.hourly }}></HourlyWeather>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-2">
            </div>
        </div>
    </>)
}

export default WeatherDashboard;
import axios from 'axios'

const apiUrl = 'https://geocode.xyz/'
class GeoLocationService{

    GetLocationDetailsByLatLong = (latLong, callback)=>{
        axios.get(`${apiUrl}${latLong.lat},${latLong.long}?json=1`)
        .then(function (response) {
            //console.dir(response)
            callback(response.data);
        })
        .catch(function (error) {
            if (error.response) {
                if (error.response.status === 404) {
                    callback(`\u2014`)
                }
                else
                {
                    callback(error.response) 
                }
            }
        })
    }

}

export default GeoLocationService;
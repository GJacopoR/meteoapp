import { useEffect, useState } from "react";
import { useFetcher, useParams } from "react-router-dom"

export default function City(){

    const city = useParams()

    const [longitude, setLongitude] = useState(null)

    const [latitude, setLatitude] = useState(null)

    const [weatherData, setWeatherData] = useState<any>(null)

    useEffect(() => {
        fetch(`http://api.positionstack.com/v1/forward?access_key=24ce494eff3ae1ae1e1db6c5ff3162ca&query=${city.city}`)
            .then(res => res.json())
            .then(res => {
                setLatitude(res.data[0].latitude);
                setLongitude(res.data[0].longitude);
                console.log(res)
                console.log(latitude)
                console.log(longitude)
            })
        
    }, [city])
    

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9ef2805457msh307232152d64ed8p103654jsn8d24af8a1898',
                'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            }
        };

        (latitude && longitude) && fetch(`https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=${longitude}&lat=${latitude}`, options)
            .then(response => response.json())
            .then(response => {
                setWeatherData(response)
            console.log(weatherData)})
            .catch(err => console.error(err));

        // (latitude && longitude) && setWeatherData({
        //     "count": 1,
        //     "data": [
        //         {
        //             "app_temp": 18.2,
        //             "aqi": 25,
        //             "city_name": "Bacoli",
        //             "clouds": 6,
        //             "country_code": "IT",
        //             "datetime": "2022-10-16:02",
        //             "dewpt": 16.3,
        //             "dhi": 0,
        //             "dni": 0,
        //             "elev_angle": -37.09,
        //             "ghi": 0,
        //             "gust": 2.116203,
        //             "h_angle": -90,
        //             "lat": 40.8229,
        //             "lon": 14.0666,
        //             "ob_time": "2022-10-16 02:15",
        //             "pod": "n",
        //             "precip": 0,
        //             "pres": 1019.9953,
        //             "rh": 89,
        //             "slp": 1020.1118,
        //             "snow": 0,
        //             "solar_rad": 0,
        //             "sources": [
        //                 "analysis"
        //             ],
        //             "state_code": "04",
        //             "station": "LIRM",
        //             "sunrise": "05:15",
        //             "sunset": "16:22",
        //             "temp": 18.2,
        //             "timezone": "Europe/Rome",
        //             "ts": 1665886532,
        //             "uv": 0,
        //             "vis": 16,
        //             "weather": {
        //                 "description": "Clear sky",
        //                 "code": 800,
        //                 "icon": "c01n"
        //             },
        //             "wind_cdir": "ENE",
        //             "wind_cdir_full": "east-northeast",
        //             "wind_dir": 62,
        //             "wind_spd": 1.4128833
        //         }
        //     ]
        // })
    }, [latitude, longitude])

    return weatherData ? <section>
        <header>
            <h1>{city.city}</h1>
        </header>
        <main>
            <p>Now in {weatherData.data[0].city_name} there is {weatherData.data[0].weather.description.toLowerCase()}</p>
            <p>The temperature is {weatherData.data[0].temp}°C</p>
        </main>
    </section>
    : <section> Loader here </section>
}
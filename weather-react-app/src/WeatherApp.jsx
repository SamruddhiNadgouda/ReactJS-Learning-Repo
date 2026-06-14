import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Pune",
        feelsLike: 26.59,
        humidity: 79,
        temp: 25.88,
        tempMax: 25.88,
        tempMin: 25.88,
        weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }


    return(
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}
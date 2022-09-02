import axios from "axios";
import { useState, useEffect } from "react";

import RefreshIcon from "@mui/icons-material/Refresh";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import SpeedIcon from "@mui/icons-material/Speed";
import AirIcon from "@mui/icons-material/Air";


export const WeatherApp = () => {

  interface Location{
    long: number,
    lat: number,
  }

  const [location, setLocation] = useState<Location | null>(null);
  const [isMetric, setIsMetric] = useState<boolean>(true);
  const [post, setPost] = useState<any>(null);

  const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat ? location.lat:"29.0786976"}&lon=${location?.long ? location.long:"-110.9645151"}&appid=4e91048960fd797af16731e7237484fd&units=${isMetric ? "metric" : "imperial"}&lang=es`;

  const getLocation = () => { 
     navigator.geolocation.getCurrentPosition((crd) => {
        setLocation({
          long: crd.coords.longitude,
          lat: crd.coords.latitude,
        });
      },
      () => {
        setLocation({
          long: -103.3465336,
          lat: 20.6711442,
        });
      }
     );
  }
  useEffect(() => {
    if(location){
      getData();
    }
    if(!location){
      getLocation()
    }
  }, [isMetric,location]);

  async function getData() {
    try{
      const result = await axios.get(baseURL);
      setPost(result.data);
    }
    catch(error:any) {
      console.log(error);
    }
  }

  if (!post) return null;

  const iconCode = post?.weather[0]?.icon;
  const iconUrl ="http://openweathermap.org/img/wn/" + iconCode + "@4x" + ".png";

  if(!location){
    return <h1>cargando...</h1>
  }
  
  return (
    <>
      <div className="mainContainer">
        <div className="headContainer">
          <div className="degreesSelectContainer">
            <div>
              <select
                id=""
                onChange={(e) => setIsMetric(e.target.value === "metric")}
              >
                <option value="metric">C°</option>
                <option value="imperial">F°</option>
              </select>
            </div>
            <div></div>
          </div>

          <div className="refreshButtonContainer">
            <button onClick={getData}>
              <RefreshIcon className="refreshIcon" sx={{ fontSize: 30 }} />
            </button>
          </div>
        </div>

        <div className="bodyContainer">
          <div className="mainInfoContainer">
            <div className="locationContainer">
              <span className="locationText">{post?.name}</span>
            </div>
            <div className="weatherIcon">
              <div id="icon">
                <img id="wicon" src={iconUrl} alt="Weather icon" />
              </div>
            </div>
            <div className="mainInfo">
              <span className="mainDegrees">{post?.main?.temp}°</span>
              <span className="weatherInfo2">
                {post?.weather[0]?.description.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="specsInfoContainer">
            <div className="FeelsLike">
              <div className="iconSpecContainer">
                <DeviceThermostatIcon className="icon" sx={{ fontSize: 30 }} />
              </div>
              <div className="specContainer">
                <span className="specsTitle">Sensación Térmica:</span>
                <span className="specsContent">{post?.main?.feels_like}°</span>
              </div>
            </div>

            <div className="humidity">
              <div className="iconSpecContainer">
                <InvertColorsIcon className="icon" sx={{ fontSize: 30 }} />
              </div>
              <div className="specContainer">
                <span className="specsTitle">Humedad:</span>
                <span className="specsContent">{post?.main?.humidity} %</span>
              </div>
            </div>

            <div className="windSpeed">
              <div className="iconSpecContainer">
                <AirIcon className="icon" sx={{ fontSize: 30 }} />
              </div>
              <div className="specContainer">
                <span className="specsTitle">Viento:</span>
                <span className="specsContent">
                  {post?.wind?.speed} {isMetric ? "m/s" : "millas/h"}
                </span>
              </div>
            </div>

            <div className="pressure">
              <div className="iconSpecContainer">
                <SpeedIcon className="icon" sx={{ fontSize: 30 }} />
              </div>
              <div className="specContainer">
                <span className="specsTitle">Presión:</span>
                <span className="specsContent">{post?.main?.pressure} hPa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

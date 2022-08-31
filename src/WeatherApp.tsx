import axios from "axios";
import * as React from 'react';
import { useState, useEffect } from 'react';

import RefreshIcon from "@mui/icons-material/Refresh";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import SpeedIcon from "@mui/icons-material/Speed";
import AirIcon from "@mui/icons-material/Air";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";



const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=Zapopan&appid=55729a893ab62af8afc815604208dd24&units=metric&lang=es"

export const WeatherApp = () => {

  const [post, setPost] = useState<any>(null);

  async function getData(){
    const result = await axios.get(baseURL)
    setPost(result.data)
  }

  useEffect(() => {
    if(!post){
      getData()
    }
  }, []);

  if (!post) return null;


  const iconCode = post?.weather[0]?.icon
  const iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@4x" + ".png";
  return (
    <>
    {console.log(iconUrl)}
      <div className="mainContainer">
        <div className="headContainer">
          <div className="degreesSelectContainer">
            <div>
              <ul>
                <li><button >F°</button></li>
                <li><button >C°</button></li>
              </ul>
            </div>
            <div>
              <button className="degreesSelectButton">
                <ArrowDropDownIcon sx={{ fontSize: 30 }} />
              </button>
            </div>
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
              <div id="icon"><img id="wicon" src={iconUrl} alt="Weather icon"/></div>
            </div>
            <div className="mainInfo">
              <span className="mainDegrees">{post?.main?.temp}°</span>
              <span className="weatherInfo2">{post?.weather[0]?.description.toUpperCase()}</span>
             
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
                <span className="specsContent">{post?.wind?.speed} Km/h</span>
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


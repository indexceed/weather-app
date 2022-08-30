import RefreshIcon from "@mui/icons-material/Refresh";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import SpeedIcon from "@mui/icons-material/Speed";
import AirIcon from "@mui/icons-material/Air";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const WeatherApp = () => {
  return (
    <>
      <div className="mainContainer">
        <div className="headContainer">
          <div className="degreesSelectContainer">
            <div>
              <ul>
                <li>F°</li>
              </ul>
            </div>
            <div>
              <button className="degreesSelectButton">
                <ArrowDropDownIcon sx={{ fontSize: 30 }} />
              </button>
            </div>
          </div>

          <div className="refreshButtonContainer">
            <button>
              <RefreshIcon className="refreshIcon" sx={{ fontSize: 30 }} />
            </button>
          </div>
        </div>

        <div className="bodyContainer">
          <div className="mainInfoContainer">
            <div className="locationContainer">
              <span className="locationText">Zapopan</span>
            </div>
            <div className="weatherIcon">
              <FilterDramaIcon sx={{ fontSize: 70 }} />
            </div>
            <div className="mainInfo">
              <span className="mainDegrees">45.79°</span>
              <span className="weatherInfo1">Overcast Clouds</span>
              <span className="weatherInfo2">Clouds</span>
            </div>
          </div>

          <div className="specsInfoContainer">
            <div className="FeelsLike">
              <div className="iconSpecContainer">
                <DeviceThermostatIcon className="icon" sx={{ fontSize: 30 }} />
              </div>
              <div className="specContainer">
                <span className="specsTitle">Feels like:</span>
                <span className="specsContent">43.9</span>
              </div>
            </div>

            <div className="humidity">
              <div className="iconSpecContainer">
                 <InvertColorsIcon className="icon" sx={{ fontSize: 30 }} />
              </div>
              <div className="specContainer">
                <span className="specsTitle">Humidity:</span>
                <span className="specsContent">93 %</span>
              </div>
            </div>

            <div className="windSpeed">
              <div className="iconSpecContainer">
                <AirIcon className="icon" sx={{ fontSize: 30 }} />
              </div>
              <div className="specContainer">
                <span className="specsTitle">Wind Speed:</span>
                <span className="specsContent">20 miles/h</span>
              </div>
            </div>

            <div className="pressure">
              <div className="iconSpecContainer">
                <SpeedIcon className="icon" sx={{ fontSize: 30 }} />
              </div>
              <div className="specContainer">
                <span className="specsTitle">Pressure:</span>
                <span className="specsContent">1025 hPa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

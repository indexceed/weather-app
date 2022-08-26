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

          <div className="reloadButtonContainer">
            <button>
              <RefreshIcon className="refreshIcon" sx={{ fontSize: 30 }} />
            </button>
          </div>
        </div>

        <div className="bodyContainer">
          <div className="mainInfoContainer">
            <div className="location">
              <span>Zapopan</span>
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
              <DeviceThermostatIcon className="icon" sx={{ fontSize: 30 }} />
              <div className="specContainer">
                <text>Feels like:</text>
                <span>43.9</span>
              </div>
            </div>

            <div className="humidity">
              <InvertColorsIcon className="icon" sx={{ fontSize: 30 }} />
              <div className="specContainer">
                <text>Humidity:</text>
                <span>93 %</span>
              </div>
            </div>

            <div className="windSpeed">
              <AirIcon className="icon" sx={{ fontSize: 30 }} />
              <div className="specContainer">
                <text>Wind Speed:</text>
                <span>2 miles/h</span>
              </div>
            </div>

            <div className="pressure">
              <SpeedIcon className="icon" sx={{ fontSize: 30 }} />
              <div className="specContainer">
                <text>Pressure:</text>
                <span>1025 hPa</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

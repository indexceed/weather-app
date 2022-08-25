import RefreshIcon from '@mui/icons-material/Refresh';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import SpeedIcon from '@mui/icons-material/Speed';
import AirIcon from '@mui/icons-material/Air';


export const WeatherApp = () => {


  return (
    <>
     <div className="mainContainer">
      <div className="headContainer">
        <div className="degreesButtonContainer">
          <span>Grados F°</span>
        </div>
        <div className="reloadButtonContainer">
          <RefreshIcon className='icon' sx={{ fontSize: 30 }}/>
        </div>
      </div>

      <div className="bodyContainer">

        <div className="mainInfoContainer">
          <span className="climaSpan">Clima:</span>
        </div>

        <div className="specsInfoContainer">
          <div className="FeelsLike">
            <DeviceThermostatIcon className='icon' sx={{ fontSize: 30 }} />
            <span>Feels like:</span>
          </div>
          <div>
            <InvertColorsIcon className='icon' sx={{ fontSize: 30 }}/>
            
            <span>Humidity:</span>
          </div>
          <div>
            <AirIcon className='icon' sx={{ fontSize: 30 }}/>
            <span>Wind Speed:</span>
          </div>
          <div className="windSpeed">
            <SpeedIcon className='icon'  sx={{ fontSize: 30 }}/>
            <span >Pressure:</span>
          </div>
        </div>

      </div>
     </div>
    </>
   
  )
}






export const WeatherApp = () => {


  return (
    <>
     <div className="mainContainer">
      <div className="headContainer">
        <div className="degreesButtonContainer">
          <span>Grados F°</span>
        </div>
        <div className="reloadButtonContainer">
          <span>reload</span>
        </div>
      </div>

      <div className="bodyContainer">
        <div className="mainInfoContainer">
          <span className="climaSpan">Clima</span>
        </div>
        <div className="specsInfoContainer">
          <span className="FeelsLike">Feels like</span>
          <span>Humidity</span>
          <span>Wind Speed</span>
          <span className="windSpeed">Pressure</span>
        </div>
      </div>
     </div>
    </>
   
  )
}




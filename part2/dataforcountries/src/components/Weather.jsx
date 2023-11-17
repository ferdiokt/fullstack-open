const Weather = ({ weather }) => {
  if (weather === null) {
    return null;
  } else {
    return (
      <div>
        <p>Temperature: {weather.main.temp} °C</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    );
  }
};

export default Weather;

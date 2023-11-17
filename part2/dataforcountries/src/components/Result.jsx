import { useEffect, useState } from "react";

import axios from "axios";

import Weather from "./Weather";

const Result = ({ country }) => {
  const apiKey = import.meta.env.VITE_OPENWEATHER_KEY;
  const [weather, setWeather] = useState(null);
  const [notifMessage, setNotifMessage] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&units=metric&appid=${apiKey}`
      )
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        setNotifMessage(error.message);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>{country.name.common}</h1>
        <div>
          Capital: <strong>{country.capital}</strong>
        </div>
        <div>
          Area: <strong>{country.area}</strong>
        </div>
        <h2>Languages:</h2>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <br />
        <img src={country.flags.png} alt="flag" />
      </div>
      <div>
        <h2>Weather in {country.capital}</h2>
        {notifMessage && <p>{notifMessage}</p>}
        {weather && <Weather weather={weather} />}
      </div>
    </div>
  );
};

export default Result;

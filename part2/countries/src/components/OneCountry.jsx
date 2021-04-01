import { useState, useEffect } from "react";
import axios from "axios";

const key = process.env.REACT_APP_OPENWEATHERMAP_KEY;

const OneCountry = ({ country }) => {
  const [weather, setWeather] = useState(undefined);

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${key}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [country.capital]);

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>Spoken languages</h3>
      <ul>
        {country.languages.map((language) => (
          <li key={language.nativeName}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt={`${country.name} flag`} width="150" />
      <h3>Weather in {country.capital}</h3>
      {weather && (
        <>
          <p>
            <strong>temperature: </strong>
            {weather.main.temp} Celsius
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather temperature pic"
          />
          <p>
            <strong>description: </strong> {weather.weather[0].description}
          </p>
          <p>
            <strong>wind: </strong> {weather.wind.speed} mph
          </p>
        </>
      )}
    </div>
  );
};

export default OneCountry;

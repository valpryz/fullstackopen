import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  const findCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(search);
  });

  const OneCountry = ({ country }) => {
    return (
      <div>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h3>languages</h3>
        <ul>
          {country.languages.map((language) => (
            <li key={language.nativeName}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} alt={`${country.name} flag`} width="150" />
      </div>
    );
  };

  const ShownCountries = ({ countries }) => {
    if (!search) {
      return null;
    }

    if (countries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    }

    return (
      <div>
        {countries.map((country) => (
          <p key={country.alpha3Code}>{country.name}</p>
        ))}
      </div>
    );
  };

  return (
    <div>
      <label>
        find countries
        <input value={search} onChange={handleSearch} />
      </label>
      {findCountries.length === 1 ? (
        <OneCountry country={findCountries[0]} />
      ) : (
        <ShownCountries countries={findCountries} />
      )}
    </div>
  );
};

export default App;

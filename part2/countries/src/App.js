import { useState, useEffect } from "react";
import axios from "axios";
import OneCountry from "./components/OneCountry";
import ShownCountries from "./components/ShownCountries";

const App = () => {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [countryShow, setCountryShow] = useState("");

  const getCountries = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  };

  useEffect(getCountries, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const findCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(search);
  });

  const handleClick = (id) => {
    if (countryShow === id) {
      setCountryShow("");
    } else {
      setCountryShow(id);
    }
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
        <ShownCountries
          countries={findCountries}
          search={search}
          handleClick={handleClick}
          countryShow={countryShow}
        />
      )}
    </div>
  );
};

export default App;

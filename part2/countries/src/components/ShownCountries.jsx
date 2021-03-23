import OneCountry from "./OneCountry";

const ShownCountries = ({ countries, search, handleClick, countryShow }) => {
  if (!search) {
    return null;
  }

  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  return (
    <div>
      {countries.map((country) => (
        <div key={country.nativeName}>
          {country.name}{" "}
          <button onClick={() => handleClick(country.nativeName)}>
            {countryShow === country.nativeName ? "close" : "show"}
          </button>
          {countryShow === country.nativeName ? (
            <OneCountry country={country} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default ShownCountries;

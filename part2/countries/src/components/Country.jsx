const Country = (props) => {
    const {country, data} = props

    return (
        <>
            <h1>{country.name.common}</h1>
            <p>Capital {country.capital}</p> 
            <p>Area {country.area}</p>
            <h2>Languages</h2>
            <ul>
                { Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <h2>Weather in {country.capital}</h2>
            <p>Temperature {data && (data.main.temp - 273.15).toFixed(2)} Celsius</p>
            <div><img src={`https://openweathermap.org/img/wn/${data && data.weather[0].icon}@2x.png`} alt={data && data.weather[0].description} /></div>
            <p>Wind {data && data.wind.speed} m/s</p>
        </>
    )
}

export default Country
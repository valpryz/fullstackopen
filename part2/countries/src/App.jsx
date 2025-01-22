import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryLine = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const {country} = props
    return (
        <div>
            <div>{country.name.common} <button onClick={()=> setIsOpen(!isOpen)}>{isOpen ? "hide" : "show"}</button></div>
            {isOpen && <CountryView country={country}/>}
        </div>
    )
}

const CountryView = (props) => {
    const {country} = props

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt}/>
        </div>
    )
}

const Countries = (props) => {

    const {countries} = props

    if(countries.length > 10) {
        return <div>Too many matches, specify another filter</div>
    }

    if(countries.length > 1 && countries.length <= 10) {
        const countriesListing = countries.map(country =>  <CountryLine key={country.area} country={country} />)
        return countriesListing
    }

    if(countries.length === 1) return <CountryView country={countries[0]}/>
}

const App = () => {
    const [searchCountry, setSearchCountry] = useState('')
    const [countries, setCountries] = useState([])

    const getCountries = () => {
        axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
            .then(response => setCountries(response.data))
    }

    useEffect(getCountries, [])

    const onSearch = (e) => setSearchCountry(e.target.value)

    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))

    return <>
        <div>find countries <input type="text" value={searchCountry} onChange={onSearch}/></div>
        <Countries countries={filteredCountries}/>
    </>
}

export default App
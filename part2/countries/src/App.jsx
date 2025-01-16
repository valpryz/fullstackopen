import {useState, useEffect} from 'react'
import axios from "axios"

const Country = (props) => {
  const {country} = props
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h4>languages :</h4>
      <ul>
        {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />
    </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [id, setId] = useState("")

  const fetchCountries = () => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(response => setCountries(response.data))
  }

  const countryFilter = () => {
    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

    if(filteredCountries.length > 10) return "Too many matches, specify another filter"

    if(filteredCountries.length <= 10 && filteredCountries.length > 1) {
      return  filteredCountries.map(country => <div key={country.name.common}>{country.name.common} {id !== country.ccn3 && <button onClick={() => setId(country.ccn3)}>{id === country.ccn3 ? "hide": "show"}</button>}
        {id === country.ccn3 ? <Country country={country} key={country.name.common} /> : null}
      </div>)     
  }

    if(filteredCountries.length === 1) return <Country country={filteredCountries[0]} key={filteredCountries.ccn3}/>
    
  }

  useEffect(fetchCountries, [])

  return (
    <>
     <div>find countries <input value={search} onChange={(e) => setSearch(e.target.value)} /></div> 
     <div>{countryFilter()}</div>
    </>
  )
}

export default App

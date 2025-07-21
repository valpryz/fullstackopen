import { useState, useEffect } from 'react'
import axios from "axios"
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])
  const [text, setText] = useState('')

  const getCountries = () => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data) )
  }

  useEffect(() => getCountries(), [])

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(text.toLowerCase()))

  return (
    <div>
      <div>
        <span>find countries </span>
        <input value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div>{filteredCountries && <Countries countries={filteredCountries} />}</div>
    </div>
  )
}

export default App
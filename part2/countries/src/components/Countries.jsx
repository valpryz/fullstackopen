import { useState } from 'react'
import CountryLine from './CountryLine'
import Country from './Country'
import axios from 'axios'

const Countries = (props) => {
    const [data, setData] = useState(null)
    const { countries } = props

    if(countries === undefined){
        return null
    }

    if(countries.length > 10) return <p>Too many matches, specify another filter</p>

    if(countries.length > 1 && countries.length <= 10) {
        return countries.map(country => <CountryLine country={country} key={country.area}/>)
    }

    const fetchWeatherData = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${countries[0].capital}&appid=${import.meta.env.VITE_WEATHER_KEY}`)
            .then(response => setData(response.data))  
    }
    
    if(countries.length === 1){
        fetchWeatherData()
        return data && <Country country={countries[0]} data={data}/>
    }

}

export default Countries
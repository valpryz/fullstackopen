import { useState } from 'react'
import Country from './Country'
import axios from 'axios'

const CountryLine = (props) => {
    const [show, setShow] = useState(false)
    const [data, setData] = useState(null)
    const { country } = props

    const fetchWeatherData = () => {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${import.meta.env.VITE_WEATHER_KEY}`)
            .then(response => setData(response.data))
    }

    const toggleDetails = () => {
        setShow(!show)
        if(!data){
            fetchWeatherData()
        }
    }

    return (
        <div>
            <div>{ show ? <Country country={country} data={data} /> : country.name.common} <button onClick={toggleDetails}>{show ? "hide": "show"}</button></div>
        </div>
    )
}

export default CountryLine
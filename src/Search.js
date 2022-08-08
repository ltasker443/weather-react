import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
    let [city, setCity]=useState("");
    let [loaded, setLoaded]=useState(false);
    let [weather, setWeather]=useState("");
    
    function showWeather(response) {
        setLoaded(true);
        setWeather({
            name: response.data.name,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        }
        );
    }
    function handleSubmit(event) {
        event.preventDefault();
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=294c897fc47f4b73d1c81e6766aacc85&units=imperial`;
        axios.get(apiUrl).then(showWeather);
    }
    function updateCity(event) {
        setCity(event.target.value);
    }
    let form = (
        <div className="container">
            <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control me-2 enter-city" type="search" autofocus="on" autocomplete="off" placeholder="City" onChange={updateCity} />
                <button className="btn" type="submit"> Search </button>
            </form>
        </div>
    );
    if (loaded){
        return (
            <div className="card">
                {form}
                <h2>{weather.name}</h2>
                <ul>
                    <li> Temperature: {Math.round(weather.temperature)}ºF</li>
                    <li> Currently: {weather.description}</li>
                    <li> Humidity: {weather.humidity}%</li>
                    <li> Wind Speed: {Math.round(weather.wind)} mph</li>
                    <img alt="current icon" src={weather.icon} />
                </ul>
            </div>
        );
    } else {
        return form;
    }
}
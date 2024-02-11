import React, {useEffect, useState} from "react";

const WeatherDisplay = () =>  {
    const API_KEY = '';

    const [weatherData, setWeatherData] = useState(null);

    // Here the promise is being consumed
    // If the promise is resolved successfully then control goes to the then block
    // If the promise is does not resolve successfully and returns an error then the control goes to catch block

    useEffect(()=>{
        fetchWeatherData()
        .then( data => 
            {
                const {location, current} = data;
                const {name} = location;
                const {temp_c} = current;
                setWeatherData({name,temp_c})
            }


        ).catch( error => console.error('Error fetching weather data',error));
    },[]);

    // Here the promise is being created

    // resolve and reject are both functions provided by the Promise constructor
    // resolve is called when the asynchronous operation is successful and you want to fulfill the promise with a value
    // In the context of fetch API response represents HTTP response received from the server afer making a request
    // response.ok checks if the response status is within the range of 200-299, indicating a successful request
    // If the response is not ok then control goes to the catch block directly 
    // If the response is ok then response.json() is processed in the then block

    const fetchWeatherData = () => {
        return new Promise((resolve,reject)=> {
            fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`)
            .then(response => {
                if(!response.ok){
                    throw new Error('Failed to fetch Weather Data');
                }
                return response.json();
            })
            .then(
                data => {
                    resolve(data);
                }
            ).catch(error => reject(error));
        });

    }

    if(!weatherData){
        return <div>Loading...</div>
    }

    return(
        <div>
            <h3>{weatherData.name}</h3>
            <h3>{weatherData.temp_c}°C</h3>
        </div>
    );

}

export default WeatherDisplay;
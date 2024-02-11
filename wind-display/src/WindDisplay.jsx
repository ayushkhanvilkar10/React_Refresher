import React, {useState, useEffect} from 'react';

// In newer versions of React the code works even if React is not imported.
// During compilation the necessary imports are added.
// In versions that are older than 17 it is mandatory to import React.
// JSX is transpiled to 'React.createElement()' calls


const WindDisplay = () => {
    const [locationName, setLocationName] = useState('');
    const [windSpeed, setWindSpeed] = useState('');

    useEffect(()=> {

        // In JavaScript 'async' keyword is used to make an asynchronous function. An synchronous function returns a promise implicitly.
        // Even if we don't explicity write a promise in the async function it is still returned.
        // In as async function you can use await keyword.
        // Using an async function means that the execution is stopped until the promise is settled (fulfilled or rejected).
        
        // In the try block below if there is an error at any point then the execution jumps to catch block.
        // Below 'response.json()' returns a promise. 'await' keyword is necessary to pause the execution until the promise is resolved.
        // After the promise is resolved successfully JSON data is parsed and stored in data variable

        const fetchData = async() => {
            try{
                const response = await fetch('http://api.weatherapi.com/v1/current.json?key=4910be1e6bd14f90abe194439241102&q=London&aqi=no');
                const data = await response.json();
                const { name } = data.location;
                const { wind_kph } = data.current;
                setLocationName(name);
                setWindSpeed(wind_kph);
            }
            catch(error){
                console.error('Error fetching data',error);
            }
        };

        fetchData();
    },[]);

    return(
        <div>
            <h3>{`Location : ${locationName}`}</h3>
            <h3>{`WindSpeed : ${windSpeed}`}</h3>
        </div>
    );

}

export default WindDisplay;
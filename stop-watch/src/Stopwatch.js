import React, { useState, useEffect } from 'react';

function Stopwatch() {
  const [elapsedTime, setElapsedTime ] = useState(0);
  const [isRunning, setIsRunning ] = useState(false);

  useEffect(()=>{

        let intervalId;

        if(isRunning){
           intervalId = setInterval(()=> {
            setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
           },1000);
        }
        else{
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }
    ,[isRunning]);

    const handleIsRunningChange = () => {
        setIsRunning(!isRunning);
    }

    const handleReset = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

  return (
    <div>
        <h3>
            {formatTime(elapsedTime)}
        </h3>
        <button onClick={handleIsRunningChange}>
            {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={handleReset}>
            Reset
        </button>
    </div>
  );
}

export default Stopwatch;

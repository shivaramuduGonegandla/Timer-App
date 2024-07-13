import React, { useRef, useState } from 'react';
const Solution = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [numberColor, setNumberColor] = useState('#61dafb'); // Initial color for number
    const timerId = useRef(null);
  
    const start = () => {
      if (!isRunning) {
        timerId.current = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
        setIsRunning(true);
        setNumberColor('#28a745'); // Change number color to green on start
      }
    };
  
    const stop = () => {
      if (isRunning) {
        clearInterval(timerId.current);
        setIsRunning(false);
        setNumberColor('#dc3545'); // Change number color to red on stop
      }
    };
  
    const pause = () => {
      if (isRunning) {
        clearInterval(timerId.current);
        setIsRunning(false);
        setNumberColor('#ffc107'); // Change number color to yellow on pause
      }
    };
  
    const reset = () => {
      clearInterval(timerId.current);
      setTime(0);
      setIsRunning(false);
      setNumberColor('#61dafb'); // Reset number color to default blue
    };
  
    return (
      <div className="timer-container">
        <h1 className="main-heading">Welcome to</h1>
        <h2 className="timer-title">Awesome Timer App</h2>
        <h3 className="timer-display" style={{ color: numberColor }}>{time}</h3>
        <div className="button-group">
          <button className="timer-button start" onClick={start}>Start</button>
          <button className="timer-button stop" onClick={stop}>Stop</button>
          <button className="timer-button pause" onClick={pause}>Pause</button>
          <button className="timer-button reset" onClick={reset}>Reset</button>
        </div>
      </div>
    );
  };
  
  export default Solution;
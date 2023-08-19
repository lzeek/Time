import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='time--container'>
    <h1>Date</h1>
    <div className='time--values'>
    <h3>{time.getHours()}</h3>
    <h3>:{time.getMinutes()}</h3>
    <h3>:{time.getSeconds()}</h3>
    </div>
    </div>
  );
}

export default App;
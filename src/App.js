import { useState, useEffect } from 'react';
import "./index.css";


const SimpleCounter = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [years, setYears] =useState(0);

  useEffect(() => {
    
    const secondInterval = setInterval(() => {
      setSeconds(seconds + 1);
 
    if(seconds === 9){
      setSeconds(0);
      setMinutes((minutes) => minutes + 1);
    }
    if(seconds === 9 && minutes === 9){
        setSeconds(0);
        setMinutes(0);
        setHours((hours) => hours + 1);
    } if (seconds === 9 && minutes === 9 && hours === 9){
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays((days) => days + 1);
    } if (seconds === 9 && minutes === 9 && hours === 9 && days === 9 ){
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        setDays(0);
        setYears((years) => years + 1);
    }  
      },1000);

    return () =>{ 
      clearInterval(secondInterval);
    }

  });

  return (
    <div className='main-container'>
      <div className='box'>Clock</div>
      <div className='box'>{years}</div>
      <div className='box'>{days}</div>
      <div className='box'>{hours}</div>
      <div className='box'>{minutes}</div>
      <div className='box'>{seconds}</div>
    </div>
  );
}

export default SimpleCounter;

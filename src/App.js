
import './App.css';

let count = 0;

const SecondsCounter = ()  => {
  setInterval(() => {
    count++;
    
  }, 1500);
  return(<div>
    <SecondsCounter {count} />
  </div>)
}

export default SecondsCounter;

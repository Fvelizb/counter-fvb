import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function SecondsCounter({ seconds }) {
  return (
    <div className="counter">
      <div className="digit">{Math.floor(seconds / 36000) % 10}</div>
      <div className="digit">{Math.floor(seconds / 3600) % 10}</div>
      <span className="colon">:</span>
      <div className="digit">{Math.floor(seconds / 600) % 6}</div>
      <div className="digit">{Math.floor(seconds / 60) % 10}</div>
      <span className="colon">:</span>
      <div className="digit">{Math.floor(seconds / 10) % 6}</div>
      <div className="digit">{seconds % 10}</div>
    </div>
  );
}

function startCounter() {
  let secondsPassed = 0;
  setInterval(() => {
    secondsPassed++;
    ReactDOM.render(
      <SecondsCounter seconds={secondsPassed} />,
      document.getElementById('root')
    );
  }, 1000);
}

setTimeout(() => {
  alert('¿Quieres que siga la cuenta?');
  clearInterval(intervalId);
}, 10000);

setTimeout(() => {
  alert('¿En serio vas a seguir viendo esto?');
  clearInterval(intervalId);
}, 20000);

window.addEventListener('load', startCounter);

export default App

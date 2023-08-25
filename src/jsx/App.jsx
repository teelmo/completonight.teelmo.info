import React, { useEffect } from 'react';
import '../styles/styles.less';

import Confetti from 'react-confetti';

function App() {
  const counter = () => {
    // The data/time we want to countdown to
    const countDownDate = new Date('Aug 31, 2023 19:30:00').getTime();

    // Run myfunc every second
    const myfunc = setInterval(() => {
      const now = new Date().getTime();
      const timeleft = countDownDate - now;

      // Calculating the days, hours, minutes and seconds left
      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      // Result is output to the specific element
      document.getElementById('days').innerHTML = `${days} days `;
      document.getElementById('hours').innerHTML = `${hours}h `;
      document.getElementById('mins').innerHTML = `${minutes}m `;
      document.getElementById('secs').innerHTML = `${seconds}s `;

      // Display the message when countdown is over
      if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById('hours').innerHTML = '';
        document.getElementById('mins').innerHTML = '';
        document.getElementById('secs').innerHTML = '';
        document.getElementById('message').innerHTML = 'YOU ARE LATE OR PRESENT!!';
      }
    }, 1000);
  };
  useEffect(() => {
    counter();
  }, []);
  return (
    <div className="app">
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle className="rain" />
      <h3>HOMBRES AND AMIGA&shy;RETTES!</h3>
      <div className="image_container"><img src="./assets/img/completo1.jpg" alt="Chile meme" /></div>
      <h1>COMP&shy;LETO NIGHT</h1>
      <h3>Vamos! Ales! Andiamos! Let&apos;s mennään!</h3>
      <div className="image_container"><img src="./assets/img/completo2.jpg" alt="Chile meme" /></div>
      <h3>VIVA no mañana sino HOY!</h3>
      <div className="image_container"><img src="./assets/img/completo3.jpg" alt="Chile meme" /></div>
      <h1 id="message">
        You still have
        {' '}
        <span id="days" />
        <span id="hours" />
        <span id="mins" />
        <span id="secs" />
        {' '}
        until the Completo explosion.
      </h1>
      <div className="image_container"><img src="./assets/img/completo4.jpg" alt="Chile meme" /></div>
      <h3>And you will be piscola&apos;d</h3>
      <div className="image_container"><img src="./assets/img/completo5.png" alt="Chile meme" /></div>
      <h1>Friday 1.9.2023 is the day</h1>
    </div>
  );
}
export default App;

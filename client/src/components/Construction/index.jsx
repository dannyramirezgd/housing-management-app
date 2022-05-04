import cone from '../../image/cone.jpg';
import styles from './Construction.module.css';
import { useState, useRef, useEffect } from 'react';

const Construction = ({ date }) => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();
  const initialDate = date ? date : 'May 30, 2022 00:00:00';

  const startTimer = () => {
    const countDownDate = new Date(initialDate).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = countDownDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (diff < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <main className={styles.bigContainer}>
        <div className={styles.smallContainer}>
          <div>
            <img src={cone} alt="construction cone" width="150px" />
            <p>
              <span className={styles.title}>COMING SOON</span>
            </p>
          </div>
          <div className={styles.timer}>
            <section>
              <p>{timerDays}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
export default Construction;

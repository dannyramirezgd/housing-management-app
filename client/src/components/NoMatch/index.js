import { useEffect, useRef, useState } from 'react';
import cryingTenants from '../../image/cryingFamily.png';
import styles from './NoMatch.module.css';

const NoMatch = ({ history }) => {
  const [timerSeconds, setTimerSeconds] = useState(10);

  let interval = useRef();
  const clear = () => {
    window.clearInterval(interval.current);
  };

  useEffect(() => {
    interval.current = setInterval(() => {
      setTimerSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (timerSeconds === 0) {
      clear();
      window.location.replace('/');
    }
  }, [timerSeconds]);

  return (
    <section className={styles.timer_container}>
      <section className={styles.timer}>
        <div>
          <img src={cryingTenants} alt="crying tenants" />

          <h1>404</h1>
          <button
            className={styles.btn}
            onClick={() => history.push('/')}
            styles={{ cursor: 'pointer' }}
          >
            BACK HOME
          </button>
          <h2>Oh~ SNAP!! You got evicted.</h2>
          <h4>
            The page you're looking for is now unavailable due to your eviction.
          </h4>
        </div>
        <p>Back Home in:</p>
        <div>
          <section>
            <p>00</p>
            <p>
              <small>Hours</small>
            </p>
          </section>
          <span>:</span>
          <section>
            <p>00</p>
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
      </section>
    </section>
  );
};

export default NoMatch;

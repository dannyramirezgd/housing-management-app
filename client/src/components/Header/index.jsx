import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import logo from '../../image/NHLlogo.png';
import styles from './Header.module.css';
import { useSpring, animated } from 'react-spring';

const Header = () => {
  const logoStyle = useSpring({
    from: { scale: 1.25 },
    to: { scale: 1 },
    config: { duration: 1000 },
  });
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header
      className="d-flex align-center justify-space-between-lg px-3 justify-center"
      style={{ backgroundColor: '#4682B4' }}
    >
      <div className={styles.font}>New House Life</div>
      <Link to="/">
        <animated.img
          style={logoStyle}
          className={styles.logo}
          src={logo}
          alt=""
        />
      </Link>

      <nav className="text-center">
        {Auth.loggedIn() ? (
          <>
            <Link className={styles.font} to="/" onClick={logout}>
              logout
            </Link>
          </>
        ) : (
          <>
            <Link className={styles.font} to="/login">
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

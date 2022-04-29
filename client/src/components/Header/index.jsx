import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import logo from '../../image/NHLlogo.png';
import styles from './Header.module.css';

const Header = () => {
  
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };
  
  return(
    <header className="flex-row align-center" style={{backgroundColor: '#4682B4'}}>
      <div className="container flex-row justify-space-between-lg px-3 justify-center align-center">
          <div className={styles.font}>   
          New House Life
          </div>
        <Link to='/'>
          <img className={styles.logo} src={logo} alt=''/>   
        </Link>

        <nav className='text-center'>
          {Auth.loggedIn() ? (
            <>
            <Link className={styles.font} to='/' onClick={logout}>
              logout
            </Link>
            </>
          ):(
            <>
              <Link className={styles.font} to='/login'>Login</Link>
            </>
          )}

        </nav>  
      </div>
    </header>
)};

export default Header;
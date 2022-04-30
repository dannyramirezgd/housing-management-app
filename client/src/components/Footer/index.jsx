import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook as facebook,
  faInstagram as instagram,
  faTwitter as twitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faIcons as amenities,
  faEnvelope as contact,
  faAddressCard as about,
  faFileImport as documents,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer
      className={styles.footerContainer}
      style={{ backgroundColor: '#4682B4' }}
    >
      <div>
        <FontAwesomeIcon icon={facebook} className={styles.icon} size='3x'/>
        <FontAwesomeIcon icon={instagram} className={styles.icon} size='3x'/>
        <FontAwesomeIcon icon={twitter} className={styles.icon} size='3x'/>
      </div>
      <div>
        <Link to="/amenities" >
          <FontAwesomeIcon icon={amenities} className={styles.infoIcon} size='2x'/>
          AMENITIES
        </Link>
        <Link to="/about" className={styles.info}>
          <FontAwesomeIcon icon={about} className={styles.infoIcon} size='2x'/>
          ABOUT
        </Link>
        <Link to="/documents" className={styles.info}>
          <FontAwesomeIcon icon={documents} className={styles.infoIcon} size='2x'/>
          DOCUMENTS
        </Link>
        <Link to="/contactUs" className={styles.info}>
          <FontAwesomeIcon icon={contact} className={styles.infoIcon} size='2x'/>
          CONTACT US
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

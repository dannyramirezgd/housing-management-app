import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook as facebook,
  faInstagram as instagram,
  faTwitter as twitter,
  faCcStripe as stripe,
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
        {/* !! must clear this out post project! and deploy to heroku */}
        <Link
          to={{ pathname: 'https://facebook.com' }}
          target="_blank"
        >
          <FontAwesomeIcon icon={facebook} className={styles.icon} size="3x" />
        </Link>
        <Link
          to={{ pathname: 'https://instagram.com' }}
          target="_blank"
        >
          <FontAwesomeIcon icon={instagram} className={styles.icon} size="3x" />
        </Link>
        <Link
          to={{ pathname: 'https://www.twitter.com' }}
          target="_blank"
        >
          <FontAwesomeIcon icon={twitter} className={styles.icon} size="3x" />
        </Link>
      </div>
      <div className={styles.iconContainer}>
        <Link to="/amenities" className={styles.info}>
          <FontAwesomeIcon
            icon={amenities}
            className={styles.infoIcon}
            size="2x"
          />
          AMENITIES
        </Link>
        <Link to="/about" className={styles.info}>
          <FontAwesomeIcon icon={about} className={styles.infoIcon} size="2x" />
          ABOUT
        </Link>
        <Link to="/construction" className={styles.info}>
          <FontAwesomeIcon
            icon={documents}
            className={styles.infoIcon}
            size="2x"
          />
          DOCUMENTS
        </Link>
        <Link to="/contactUs" className={styles.info}>
          <FontAwesomeIcon
            icon={contact}
            className={styles.infoIcon}
            size="2x"
          />
          CONTACT US
        </Link>
        <Link to="/payment" className={styles.info}>
          <FontAwesomeIcon
            icon={stripe}
            className={styles.infoIcon}
            size="2x"
          />
          PAYMENT
        </Link>
      </div>
      <div className={styles.iconContainerSm}>
        <Link to="/amenities" className={styles.info}>
          <FontAwesomeIcon
            icon={amenities}
            className={styles.infoIcon}
            size="2x"
          />
        </Link>
        <Link to="/about" className={styles.info}>
          <FontAwesomeIcon icon={about} className={styles.infoIcon} size="2x" />
        </Link>
        <Link to="/construction" className={styles.info}>
          <FontAwesomeIcon
            icon={documents}
            className={styles.infoIcon}
            size="2x"
          />
        </Link>
        <Link to="/contactUs" className={styles.info}>
          <FontAwesomeIcon
            icon={contact}
            className={styles.infoIcon}
            size="2x"
          />
        </Link>
        <Link to="/payment" className={styles.info}>
          <FontAwesomeIcon
            icon={stripe}
            className={styles.infoIcon}
            size="2x"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

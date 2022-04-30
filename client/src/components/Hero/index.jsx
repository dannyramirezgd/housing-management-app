import hero from '../../image/NewHouseLifeStockPhoto_8.jpg';
import imageOne from '../../image/NewHouseLifeStockPhoto_3.jpg';
import { useState } from 'react';
import { Figure, Modal } from 'react-bootstrap';
import styles from './Hero.module.css';
import EmailForm from '../EmailForm';

const Hero = () => {
  const [showSignModal, setShowSignModal] = useState(false);

  return (
    <div>
      <img
        src={hero}
        alt="New House Life Apartment"
        style={{ width: '100%' }}
      />
      <div className={styles.jumbotron}>
        <Figure className={styles.figure}>
          <Figure.Image
            width={350}
            alt="Apartment Partial"
            src={imageOne}
            style={{ border: '2px solid #f5f5f5' }}
          />
        </Figure>
        <h1 className={styles.title}>MEMORIES START HERE</h1>
        <p className={styles.lead}>
          Luxury and modern apartments awaits you. <br />
          Begin your new life journey with us!
        </p>
        <hr className="my-4" />
        <button
          style={{ fontFamily: 'Abel' }}
          className="btn btn-primary btn-lg"
          onClick={() => setShowSignModal(true)}
        >
          Become a Resident
        </button>
        <Modal
          size="lg"
          show={showSignModal}
          onHide={() => setShowSignModal(false)}
        >
          <EmailForm onSubmit={() => setShowSignModal(true)} />
        </Modal>
      </div>
    </div>
  );
};

export default Hero;

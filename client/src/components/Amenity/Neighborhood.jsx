import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw as wag } from '@fortawesome/free-solid-svg-icons';
import styles from './Neighborhood.module.css';

const Neighborhood = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="text-center bg-secondary my-3">
        <h1 style={{ fontFamily: 'Shadows Into Light' }}>
          Checkout the neighborhood vibes!
        </h1>
      </div>
      <div className="text-center my-2 p-2">
        <h3 className={styles.title}>Are you a pet lover?</h3>
        <p className={styles.iconBody} onClick={() => setShow(true)}>
          Click Me
          <br />
          <FontAwesomeIcon className={styles.icon} icon={wag} size="3x" />
        </p>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName={styles.myWidth}
        contentClassName={styles.myHeight}
        centered
      >
        <iframe
          className={styles.myFrame}
          src="https://secure-savannah-19572.herokuapp.com/"
          title="WAG!"
        />
        <hr />
        <button
          className="btn"
          onClick={() => {
            setShow(false);
          }}
        >
          Close
        </button>
      </Modal>
    </>
  );
};

export default Neighborhood;

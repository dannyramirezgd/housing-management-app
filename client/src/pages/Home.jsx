import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import EmailForm from '../components/EmailForm';
import Hero from '../components/Hero';

const Home = () => {
  const [showSignModal, setShowSignModal] = useState(false);
  return (
    <main>
      <Hero />
      <button onClick={() => setShowSignModal(true)}>New Resident Application</button>
      <Modal
        size="lg"
        show={showSignModal}
        onHide={() => setShowSignModal(false)}
      >
        <EmailForm handleModalClose={() => setShowSignModal(false)} />
      </Modal>
    </main>
  );
};

export default Home;

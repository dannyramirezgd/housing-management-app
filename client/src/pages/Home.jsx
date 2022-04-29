import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SignUpForm from '../components/Signup';
import Hero from '../components/Hero';

const Home = () => {
  const [showSignModal, setShowSignModal] = useState(false);
  return (
    <main>
      <Hero />
      <button onClick={() => setShowSignModal(true)}>Create an account</button>
      <Modal
        size="lg"
        show={showSignModal}
        onHide={() => setShowSignModal(false)}
      >
        <SignUpForm handleModalClose={() => setShowSignModal(false)} />
      </Modal>
    </main>
  );
};

export default Home;

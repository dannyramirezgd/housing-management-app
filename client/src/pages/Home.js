import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SignUpForm from '../components/Signup'

const Home = () => {
  const [showSignModal, setShowSignModal] = useState(false);
  return (
    <main>
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

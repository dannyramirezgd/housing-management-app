import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SignUpForm from '../components/Signup';
import Loading from '../components/Loading';

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
      <Loading />
    </main>
  );
};

export default Home;

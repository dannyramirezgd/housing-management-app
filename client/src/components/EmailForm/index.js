import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Modal, Button } from 'react-bootstrap';

const EmailForm = ({ setShowSignModal, showSignModal }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_n14tqlb',
        'template_3um17v8',
        form.current,
        '0gvWyx6zur9zJ2n3b',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        //is there a better way to do this?
        //can we pass state up to parent component?
      )
      .catch((err) => {
        console.error(err);
      });
    setShowSignModal(false);
  };
  return (
    <Modal
      size="lg"
      show={showSignModal}
      onHide={() => setShowSignModal(false)}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>New Resident Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="firstname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your First name"
              name="user_firstname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your last name"
              name="user_lastname"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={sendEmail}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EmailForm;

import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { validateEmail, validateInput } from '../utils/helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser as user,
  faEnvelope as mail,
} from '@fortawesome/free-regular-svg-icons';
import bgImg from '../image/NewHouseLifeStockPhoto_6.jpg';
import contactPic from '../image/contatus.jpg';
import { Figure, Alert, Modal } from 'react-bootstrap';
import styles from './ContactUs.module.css';

const ContactUs = ({ history }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorEmail, setErrorEmail] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const { name, email, message } = formState;

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const handleSubmit = async (e) => {
    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_CONTACT_TEMP_ID;
    const serviceKey = process.env.REACT_APP_KEY;
    e.preventDefault();
    try {
      if (
        !errorEmail &&
        !errorName &&
        !errorMsg &&
        formState.name !== '' &&
        formState.email !== '' &&
        formState.message !== ''
      ) {
        // await emailjs.sendForm();
        const emailSent = await emailjs.sendForm(
          serviceId,
          templateId,
          form.current,
          serviceKey,
        );

        if (emailSent) {
          setShow(true);
        }
      } else {
        setError(true);
      }
    } catch (e) {
      throw e;
    }
  };

  const handleNameChange = (e) => {
    if (e.target.name === 'name') {
      const isValid = validateInput(e.target.value);
      if (!isValid) {
        setErrorName(`${e.target.name} is required`);
      } else {
        setErrorName('');
      }
    }
    if (!errorName) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleEmailChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorEmail('Email is invalid. Try Again!');
      } else {
        setErrorEmail('');
      }
    }
    if (!errorEmail) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  const handleMsgChange = (e) => {
    if (e.target.name === 'message') {
      const isValid = validateInput(e.target.value);
      if (!isValid) {
        setErrorMsg(`${e.target.name} is required`);
      } else {
        setErrorMsg('');
      }
    }
    if (!errorName) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <main
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        fontFamily: 'Gruppo',
        color: '#f5f5f5',
        fontWeight: 'bold',
        fontSize: '1.5rem',
      }}
    >
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <Figure>
          <Figure.Image
            className="mt-3"
            width={130}
            alt="a person sending an email"
            src={contactPic}
            style={{ border: '2px solid #blue' }}
          />
        </Figure>
        <h1
          className="text-center"
          style={{ fontFamily: 'Abel', fontWeight: 'bold', fontSize: '3rem' }}
        >
          Contact Us
        </h1>
        <form
          ref={form}
          id="contact-form"
          className={styles.formEl}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label className="label" htmlFor="name">
              Name
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <FontAwesomeIcon icon={user} size="2x" />
                </span>
              </div>
              <input
                className={
                  errorName
                    ? 'form-control border border-danger'
                    : 'form-control'
                }
                type="text"
                name="name"
                defaultValue={name}
                placeholder="name"
                onBlur={handleNameChange}
              />
            </div>
          </div>
          {errorName && (
            <p
              style={{
                color: 'red',
                fontFamily: 'Patrick Hand',
                fontSize: '0.7em',
              }}
            >
              Name is required
            </p>
          )}

          <div className="form-group">
            <label className="label" htmlFor="email">
              Email
            </label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon2">
                  <FontAwesomeIcon icon={mail} size="2x" />
                </span>
              </div>
              <input
                className={
                  errorEmail
                    ? 'form-control border border-danger'
                    : 'form-control'
                }
                type="email"
                name="email"
                defaultValue={email}
                placeholder="email"
                onBlur={handleEmailChange}
              />
            </div>
          </div>
          {errorEmail && (
            <p
              style={{
                color: 'red',
                fontFamily: 'Patrick Hand',
                fontSize: '0.7em',
              }}
            >
              This email is invalid
            </p>
          )}

          <div className="form-group">
            <label className="label" htmlFor="email">
              Message
            </label>
            <div className="input-group mb-3">
              <textarea
                style={{ resize: 'none', height: '100px' }}
                className={
                  errorEmail
                    ? 'form-control border border-danger'
                    : 'form-control'
                }
                type="text"
                name="message"
                defaultValue={message}
                placeholder="How can we help you?"
                onBlur={handleMsgChange}
              />
            </div>
          </div>
          {errorMsg && (
            <p
              style={{
                color: 'red',
                fontFamily: 'Patrick Hand',
                fontSize: '0.7em',
              }}
            >
              Message is required
            </p>
          )}

          <div className="d-flex flex-direction-row">
            <div className="p-2">
              <button
                className="btn"
                type="submit"
                style={{ fontFamily: 'Abel' }}
              >
                Submit
              </button>
            </div>
            <div className="p-2">
              <button
                className="btn"
                style={{ fontFamily: 'Abel' }}
                onClick={() => history.push('/')}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
        <Modal show={show}>
          <Alert
            key="success"
            variant="success"
            style={{
              fontWeight: 'bold',
              fontFamily: 'Abel',
              width: '100%',
              display: 'block',
              margin: '0',
              textAlign: 'center',
            }}
          >
            <Alert.Heading>
              Thank you for your interest. <br />
              Allow us 365 business days to fulfill your request.
            </Alert.Heading>
            <hr />
            <button
              className="btn"
              onClick={() => {
                setShow(false);
                window.location.reload();
              }}
            >
              Close
            </button>
          </Alert>
        </Modal>

        <Modal show={error}>
          <Alert
            key="danger"
            variant="danger"
            style={{
              fontWeight: 'bold',
              fontFamily: 'Abel',
              width: '100%',
              display: 'block',
              margin: '0',
              textAlign: 'center',
            }}
          >
            <Alert.Heading>The contact us form requires your name, email, and message!</Alert.Heading>
            <hr />
            <button
              className="btn"
              onClick={() => {
                setError(false);
              }}
            >
              Close
            </button>
          </Alert>
        </Modal>
      </div>
    </main>
  );
};

export default ContactUs;

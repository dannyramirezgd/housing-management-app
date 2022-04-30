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

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!errorEmail && !errorName && !errorMsg) {
        console.log('Submit Form', formState);
        // await emailjs.sendForm();
        const emailSent = await emailjs.sendForm(
          'service_n14tqlb',
          'template_xr1nyq9',
          form.current,
          '0gvWyx6zur9zJ2n3b',
        );

        if (emailSent) {
          setShow(true);
        } else {
          console.log(emailSent);
        }
      }
    } catch (e) {
      console.log(e);
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
      console.log('Handle Form', formState);
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
      console.log('Handle Form', formState);
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
      console.log('Handle Form', formState);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        fontFamily: 'Gruppo',
        color: '#f5f5f5',
        fontWeight: 'bold',
        fontSize: '1.5rem',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          width: '100%',
          height: '100vh',
        }}
      >
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <Figure>
            <Figure.Image
              className="mt-3"
              width={275}
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
            className="col-6"
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
                  style={{ resize: 'none', height: '250px' }}
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
              <button className="btn"
                onClick={() => {
                  setShow(false);
                  window.location.reload();
                }}
              >
                Close
              </button>
            </Alert>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { useSpring, animated } from 'react-spring';
import { Form, Card, Button } from 'react-bootstrap';
import styles from './Login.module.css';

const Login = (props) => {
  const styleSpring = useSpring({
    to: { marginLeft: 0 },
    from: { marginLeft: -100 },
  });

  const [formState, setFormState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
      <animated.main style={styleSpring} className="flex-row justify-content-center">
        <div className="mx-4 pt-4">
          <Card className={styles.cardFormatting}>
            <Card.Header>Login</Card.Header>
            <Card.Body>
              <Form
                className="d-flex justify-content-center flex-wrap"
                onSubmit={handleFormSubmit}
              >
                <input
                  className="form-input w-100 mt-3 mb-3"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input w-100 mt-3 mb-3"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <Button className="btn d-block w-100" type="submit">
                  Submit
                </Button>
              </Form>
              {error && <div>Login Failed</div>}
            </Card.Body>
          </Card>
        </div>
      </animated.main>
  );
};

export default Login;

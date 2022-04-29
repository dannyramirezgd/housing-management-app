import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { useSpring, animated } from 'react-spring';

const Login = (props) => {
  const styles = useSpring({
    to: { marginLeft: 0 },
    from: { marginLeft: -100000 },
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
    <animated.div style={styles}>
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-md-6">
          <div className="card">
            <h4 className="card-header">Login</h4>

            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button className="btn d-block w-100" type="submit">
                  Submit
                </button>
              </form>
              {error && <div>Login Failed</div>}
            </div>
          </div>
        </div>
      </main>
    </animated.div>
  );
};

export default Login;
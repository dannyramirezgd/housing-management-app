import React, { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';
// import { ADD_UNIT } from '../../utils/mutations';
// import Auth from '../../utils/auth';
// import { useMutation } from '@apollo/client';
// import styles from './Signup.module.css';
import { EmailForm } from '../EmailForm';

const Signup = () => {
  // const [unitFormData, setUnitFormData] = useState({
  //   email: '',
  //   password: '',
  //   firstName: '',
  //   lastName: '',
  // });
  // // const [validated] = useState(false);

  // const [showAlert, setShowAlert] = useState(false);

  // const [addUnit, { error }] = useMutation(ADD_UNIT);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUnitFormData({
  //     ...unitFormData,
  //     [name]: value,
  //   });
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   // check if form has everything (as per react-bootstrap docs)
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //   }
  //   try {
  //     const { data } = await addUnit({
  //       variables: { ...unitFormData }
  //     });
  //     Auth.login(data.addUnit.token);
  //   } catch (err) {
  //     console.log('failed')
  //     console.error(err);
  //     setShowAlert(true);
  //   }

  //   // setUnitFormData({
  //   //   email: '',
  //   //   password: '',
  //   //   firstName: '',
  //   //   lastName: '',
  //   // });
  // };

  return (
    <EmailForm />
    // <Form className={styles.form} onSubmit={handleFormSubmit}>
    //   <Alert
    //     dismissible
    //     onClose={() => setShowAlert(false)}
    //     show={showAlert}
    //     variant="danger"
    //   >
    //     {error && <div>Uh Oh! Something went wrong in the sign up</div>}
    //   </Alert>
    //   <Form.Group>
    //     <Form.Label htmlFor="email">Email</Form.Label>
    //     <Form.Control
    //       type="email"
    //       placeholder="Your email address"
    //       name="email"
    //       onChange={handleInputChange}
    //       value={unitFormData.email}
    //       required
    //     />
    //     <Form.Control.Feedback type="invalid">
    //       Email is required!
    //     </Form.Control.Feedback>
    //   </Form.Group>

    //   <Form.Group>
    //     <Form.Label htmlFor="password">Password</Form.Label>
    //     <Form.Control
    //       type="password"
    //       placeholder="Your password"
    //       name="password"
    //       onChange={handleInputChange}
    //       value={unitFormData.password}
    //       required
    //     />
    //     <Form.Control.Feedback type="invalid">
    //       Password is required!
    //     </Form.Control.Feedback>
    //   </Form.Group>
    //   <Form.Group>
    //     <Form.Label htmlFor="firstName">First Name</Form.Label>
    //     <Form.Control
    //       type="text"
    //       placeholder="Your First Name"
    //       name="firstName"
    //       onChange={handleInputChange}
    //       value={unitFormData.firstName}
    //       required
    //     />
    //     <Form.Control.Feedback type="invalid">
    //       First name is required!
    //     </Form.Control.Feedback>
    //   </Form.Group>
    //   <Form.Group>
    //     <Form.Label htmlFor="lastName">Last Name</Form.Label>
    //     <Form.Control
    //       type="text"
    //       placeholder="Your Last Name"
    //       name="lastName"
    //       onChange={handleInputChange}
    //       value={unitFormData.lastName}
    //       required
    //     />
    //     <Form.Control.Feedback type="invalid">
    //       Last Name is required!
    //     </Form.Control.Feedback>
    //   </Form.Group>

    //   <Button
    //     disabled={
    //       !(
    //         unitFormData.email &&
    //         unitFormData.password &&
    //         unitFormData.firstName &&
    //         unitFormData.lastName
    //       )
    //     }
    //     type="submit"
    //     variant="success"
    //   >
    //     Submit
    //   </Button>
    // </Form>
  );
};

export default Signup;

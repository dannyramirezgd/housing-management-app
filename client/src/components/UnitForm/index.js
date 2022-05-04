import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_UNIT } from '../../utils/mutations';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './UnitForm.module.css';

const AddUnit = () => {
  const [unitInfo, setUnitInfo] = useState('');
  const [addUnit] = useMutation(ADD_UNIT);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUnitInfo({
      ...unitInfo,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(unitInfo)
    try {
      const { data } = await addUnit({
        variables: { ...unitInfo },
      });
      console.log(data);
    } catch (err) {
      console.error(err);
    }
    setUnitInfo({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      unitNumber: '',
    });
  };

  return (
    <section>
      <Form className={styles.form} onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email of Tenant"
            onChange={handleInputChange}
            name="email"
            value={unitInfo.email}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Tenant First Name"
            onChange={handleInputChange}
            name="firstName"
            value={unitInfo.firstName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Tenant Last Name"
            onChange={handleInputChange}
            name="lastName"
            value={unitInfo.lastName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="unitNumber">
          <Form.Label>Unit Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="UnitNumber"
            onChange={handleInputChange}
            name="unitNumber"
            value={unitInfo.unitNumber}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Temp password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            onChange={handleInputChange}
            name="password"
            value={unitInfo.password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add New Unit
        </Button>
      </Form>
    </section>
  );
};

export default AddUnit;

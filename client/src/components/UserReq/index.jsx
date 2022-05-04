import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_REQUEST, POST_REQUEST } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import { Button, Card, Form } from 'react-bootstrap';
import Loading from '../Loading';
import styles from './UserReq.module.css';

const UserReq = () => {
  const { loading, data, refetch: queryMe } = useQuery(QUERY_ME);
  const [postRequest] = useMutation(POST_REQUEST);
  const [deleteRequest] = useMutation(DELETE_REQUEST);

  const unit = data?.me || [];

  const [requestInfo, setRequestInfo] = useState({
    requestBody: '',
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRequestInfo({
      [name]: value,
    });
  };

  const handleCompleteButton = async (requestId, unitId) => {

    console.log(requestId, unitId)
    try {
      await deleteRequest({
        variables: { unitId, requestId },
      });
    } catch (e) {
      console.error(e);
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await postRequest({
        variables: { ...requestInfo },
      });
      queryMe()
      console.log(data);
      //Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setRequestInfo({
      unit: data.UnitNumber,
      requestBody: '',
    });
  };

  if (loading) {
    return <Loading />;
  }

  if (!unit) {
    return <h3>No Requests yet</h3>;
  }
  console.log(unit)

  return (
    <>
      <h2>Welcome back {unit.firstName}</h2>
      <section>
        <h4>Open Issues</h4>
        {unit.requests.map((request, index) => (
          <Card key={request._id} className={styles.card}>
            <Card.Header className={styles.cardHeader}>
              Request {index + 1}
            </Card.Header>
            <Card.Body>
              <Card.Text>{request.requestBody}</Card.Text>
              <Button
                variant="secondary"
                onClick={() =>
                  handleCompleteButton(
                    request._id,
                    unit._id,
                  )
                }
              >
                Cancel Request
              </Button>
            </Card.Body>
          </Card>
        ))}
      </section>
      <section>
        <Form className={styles.requestForm} onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Submit an Issue</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              onChange={handleInputChange}
              name="requestBody"
              value={requestInfo.requestBody}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit New Issue
          </Button>
        </Form>
      </section>
    </>
  );
};

export default UserReq;

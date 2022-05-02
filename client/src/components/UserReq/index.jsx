import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_REQUEST } from '../../utils/mutations';
import { Button, Card, Form } from 'react-bootstrap';
import Loading from '../Loading';
import { POST_REQUEST } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const UserReq = () => {
  const [postRequest, { error }] = useMutation(POST_REQUEST);
  const [deleteRequest] = useMutation(DELETE_REQUEST);
  const { loading, data } = useQuery(QUERY_ME);
  const [requestData, setRequestData] = useState({
    unit: data.unitNumber,
    requestBody: '',
  });
  const unit = data?.requests || [];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRequestData({
      [name]: value,
    });
  };

  const handleCompleteButton = async (requestId, unitId) => {
    try {
      await deleteRequest({
        variables: { unitId, requestId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!unit.length) {
    return <h3>No Requests yet</h3>;
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await postRequest({
        variables: { ...requestData },
      });

      console.log(data);
      // Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }

    setRequestData({
      unit: data.UnitNumber,
      requestBody: '',
    });
  };
  return (
    <>
      <h2>Welcome back {data.firstName}</h2>
      <h3>Open Issues</h3>
      <section>
        <h4>Open Issues</h4>
        {data.map((request, index) => (
          <Card key={request._id}>
            <Card.Header>Request {index + 1}</Card.Header>
            <Card.Body>
              <Card.Text>{request.requestBody}</Card.Text>
              <Button
                variant="secondary"
                onClick={() =>
                  handleCompleteButton(
                    request._id,
                    unit._id,
                    request.requestCount,
                  )
                }
              >
                Mark as Completed
              </Button>
            </Card.Body>
          </Card>
        ))}
      </section>
      <section>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Submit an Issue</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              onChange={handleInputChange}
              name="requestBody"
              value={requestData.requestBody}
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

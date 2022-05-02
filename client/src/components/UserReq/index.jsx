import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_REQUEST, POST_REQUEST } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import { Button, Card, Form } from 'react-bootstrap';
import Loading from '../Loading';

const UserReq = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const [postRequest] = useMutation(POST_REQUEST);
  const [deleteRequest] = useMutation(DELETE_REQUEST);

  const unit = data?.me || [];

  const [requestInfo, setRequestInfo] = useState({
    requestBody: '',
  });

  console.log(requestInfo)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRequestInfo({
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

  return (
    <>
      <h2>Welcome back {unit.firstName}</h2>
      <section>
        <h4>Open Issues</h4>
        {unit.requests.map((request, index) => (
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

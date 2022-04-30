import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_REQUEST } from '../../utils/mutations';
import { QUERY_REQUESTS } from '../../utils/queries';
import styles from './RequestList.module.css';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../Loading'

const RequestList = () => {
  const [deleteRequest] = useMutation(DELETE_REQUEST);
  const { loading, data } = useQuery(QUERY_REQUESTS);
  const units = data?.requests || [];
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

  if (!units.length) {
    return <h3>No Requests yet</h3>;
  }

  return (
    <div>
      <h2 className={styles.title}>Requests</h2>
      <div className='d-flex flex-wrap justify-content-around'>
        {units.map((unit) => (
          <div key={unit._id}>
            {unit.requests[0] && (
              <div key={unit._id} className='mx-3 my-3'>
                <h4 className={styles.title}>
                  Requests from Unit {unit.unitNumber}
                </h4>
                <h5 className={styles.secondaryTitle}>
                  Request Count {unit.requests.length}
                </h5>
                <div>
                  {unit.requests.map((request) => (
                    <div key={request._id}>
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Request</Accordion.Header>
                          <Accordion.Body>
                            {request.requestBody}<br></br>
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
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestList;

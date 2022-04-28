import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_REQUEST } from '../../utils/mutations';
import { QUERY_REQUESTS } from '../../utils/queries';
import styles from './RequestList.module.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const RequestList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    return <div>Loading...</div>;
  }

  if (!units.length) {
    return <h3>No Requests yet</h3>;
  }

  return (
    <div>
      <h2 className={styles.title}>Requests</h2>
      <div>
        {units.map((unit) => (
          <div key={unit._id}>
            {unit.requests[0] && (
              <div key={unit._id}>
                <button className={styles.title} onClick={handleShow}>
                  Requests from Unit {unit.unitNumber}
                </button>
                <h5 className={styles.secondaryTitle}>
                  Request Count {unit.requests.length}
                </h5>
                <div>
                  {unit.requests.map((request) => (
                    <div key={request._id}>
                      <Modal
                        show={show}
                        onHide={handleClose}
                        scrollable={true}
                        backdrop="static"
                        keyboard={false}
                        dialogClassName="modal-90w"
                      >
                        <Modal.Header>
                          <Modal.Title>
                            Request from Unit {unit.unitNumber}
                          </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                          <p>{request.requestBody}</p>
                        </Modal.Body>

                        <Modal.Footer>
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
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                        </Modal.Footer>
                      </Modal>
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

<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>;
export default RequestList;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { MARK_COMPLETE } from '../../utils/mutations';

const RequestList = ({ requests }) => {
  const [unitId, setUnitId] = useState('');
  const [requestId, setRequestId] = useState('');
  const [markComplete, { error }] = useMutation(MARK_COMPLETE);

  if (!requests.length) {
    return <h3>No Requests yet</h3>;
  }

  const handleCompleteButton = async (event) => {
    setUnitId(event.target.parentElement.parentElement.parentElement.id);
    setRequestId(event.target.parentElement.id);

    try {
      await markComplete({
        variables: { unitId, requestId },
      });

    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <h3>Requests</h3>
      <div>
        {requests.map((unitArr) => (
          <>
            {unitArr.requests[0] && (
              <div key={unitArr._id} id={unitArr._id}>
                Requests from {unitArr.unitNumber}
                <div>
                  {unitArr.requests.map((item) => (
                    <div key={item._id} id={item._id}>
                      <p>Request made on {item.createdAt}</p>
                      <p>{item.requestBody}</p>
                      {!item.isComplete && <p>Hello</p>}
                      <button className="btn" onClick={handleCompleteButton}>
                        Mark as Completed
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default RequestList;

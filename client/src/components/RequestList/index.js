import React from 'react';
import { useMutation } from '@apollo/client';
import { MARK_COMPLETE } from '../../utils/mutations';

const RequestList = ({ units }) => {
  const [markComplete, { error }] = useMutation(MARK_COMPLETE);

  if (!units.length) {
    return <h3>No Requests yet</h3>;
  }

  const handleCompleteButton = async (requestId, unitId) => {
    
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
        {units.map((unit) => (
          <div key={unit._id}>
            {unit.requests[0] && (
              <div key={unit._id} id={unit._id}>
                Requests from {unit.unitNumber}
                <div>
                  {unit.requests.map((request) => (
                    <div key={request._id} id={request._id}>
                      <p>Request made on {request.createdAt}</p>
                      <p>{request.requestBody}</p>
                      {!request.isComplete && <p>Hello</p>}
                      <button className="btn" onClick={() => handleCompleteButton(request._id, unit._id)}>
                        Mark as Completed
                      </button>
                      {error && <div>Something went wrong</div>}
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

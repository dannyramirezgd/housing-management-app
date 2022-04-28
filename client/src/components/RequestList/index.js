import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_REQUEST } from '../../utils/mutations';
import { QUERY_REQUESTS } from '../../utils/queries';

const RequestList = () => {
  const [deleteRequest, { error }] = useMutation(DELETE_REQUEST);
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
      <h2>Requests</h2>
      <div>
        {units.map((unit) => (
          <div key={unit._id}>
            {unit.requests[0] && (
              <div key={unit._id} id={unit._id}>
                <h4>Requests from Unit {unit.unitNumber}</h4>
                <h5>Request Count {unit.requests.length}</h5>
                <div>
                  {unit.requests.map((request) => (
                    <div key={request._id} id={request._id}>
                      {!request.isComplete && (
                        <div key={request._id} id={request._id}>
                          <p>Request made on {request.createdAt}</p>
                          <p>{request.requestBody}</p>
                          <button
                            className="btn"
                            onClick={() =>
                              handleCompleteButton(
                                request._id,
                                unit._id,
                                request.requestCount,
                              )
                            }
                          >
                            Mark as Completed
                          </button>
                          {error && <div>Something went wrong</div>}
                        </div>
                      )}
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

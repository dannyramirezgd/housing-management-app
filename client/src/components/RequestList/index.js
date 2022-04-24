import React from 'react';

const RequestList = ({ requests }) => {
  if (!requests.length) {
    return <h3>No Requests yet</h3>;
  }

  return (
    <div>
      <h3>Requests</h3>
      <div>
        {requests &&
          requests.map((requestArr) =>
            requestArr.requests.map((requestObj) => (
              <div key={requestObj._id} id={requestObj._id}>
                <p>
                  Request made by Unit {requestObj.unit} on{' '}
                  {requestObj.createdAt}
                </p>
                <p>{requestObj.requestBody}</p>
                <button className='btn'>Mark as Completed</button>
              </div>
            )),
          )}
      </div>
    </div>
  );
};

export default RequestList;

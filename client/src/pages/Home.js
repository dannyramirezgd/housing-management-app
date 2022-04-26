import React from 'react';
import RequestList from '../components/RequestList';
import { useQuery } from '@apollo/client';
import { QUERY_REQUESTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REQUESTS);

  const units = data?.requests || [];

  return (
    <main>
      {loading ? <div>Loading...</div> : <RequestList units={units} />}
    </main>
  );
};

export default Home;

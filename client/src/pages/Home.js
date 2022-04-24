import React from 'react';
import RequestList from '../components/RequestList';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_REQUESTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_REQUESTS);

  const requests = data?.requests || [];

  return (
    <main>
      {loading ? <div>Loading...</div> : <RequestList requests={requests} />}
    </main>
  );
};

export default Home;

import React from 'react';
import { Redirect } from 'react-router-dom';
import RequestList from '../components/RequestList';
import AddUnit from '../components/UnitForm';
import Auth from '../utils/auth';

const AdminHome = () => {
  if (!Auth.loggedIn() || !Auth.getProfile().data.isAdmin) {
    return <Redirect to="/" />;
  }

  return (
    <main className='d-flex justify-content-evenly'>
      <section className='col-8'>
        <RequestList />
      </section>
      <section className='mt-5 mx-3 w-25'>
        <AddUnit />
      </section>
    </main>
  );
};

export default AdminHome;

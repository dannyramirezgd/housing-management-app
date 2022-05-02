import React from 'react';
import {Redirect} from 'react-router-dom'
import RequestList from '../components/RequestList';
import Auth from '../utils/auth'

const AdminHome = () => {

  if(!Auth.loggedIn() || !Auth.getProfile().data.isAdmin){
    return <Redirect to ='/'/>
  }

  return (
    <main>
      <RequestList />
    </main>
  );
};

export default AdminHome;
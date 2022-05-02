import React from 'react';
import UserReq from '../components/UserReq'
import Auth from '../utils/auth'
import {Redirect} from 'react-router-dom'

const Profile = () => {

  if(!Auth.loggedIn()){
    return <Redirect to ='/'/>
  }


  return (
    <main>
      <UserReq />
    </main>
  );
};

export default Profile;

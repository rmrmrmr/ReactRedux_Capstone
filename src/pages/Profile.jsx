import React from 'react';
import Navbar from '../components/Navbar';

const MyProfile = () => (
  <div className="flex w-screen h-screen flex-wrap">
    <Navbar />
    <div className="h-5/6 px-12">
      <h1>Profile</h1>
    </div>
  </div>
);

export default MyProfile;

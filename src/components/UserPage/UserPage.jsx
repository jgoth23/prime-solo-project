import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';


function UserPage() {
  const history = useHistory();
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  function handleBooking() {
    history.push('/booking')
    console.log('button works');
  }
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <h3>You have 0 sessions booked</h3>
      <button onClick={handleBooking} className="btn">Book Now</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

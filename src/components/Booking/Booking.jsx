import React from 'react';
import { useHistory } from 'react-router-dom';

function Booking() {
  const history = useHistory();

  function addSession() {
    history.push('/home')
    console.log('add session');
  }
  return (
    <div>
    <h1>Book Now</h1>
    <button onClick={addSession} className="btn">Book Now</button>
    </div>
  )
};




export default Booking;
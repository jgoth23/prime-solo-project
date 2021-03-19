import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux'; 


function UserPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  console.log('in the event', bookingEvent);


  useEffect(() => {
    dispatch({ type: 'FETCH_BOOKING' });
  }, []);

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const bookingEvent = useSelector((store) => store.booking);

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
      
      {bookingEvent.map((session) => {
        return (
          <ul>
            <li>{session.lessons}</li>
            <li>{session.date}</li>
            <li>{session.date}</li>
            <li>{session.time}</li>
            <li>{session.notes}</li>
          </ul>
        );
      })}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

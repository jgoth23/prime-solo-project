import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import moment from 'moment';


function UserPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in the event', bookingEvent);
    dispatch({ type: 'FETCH_BOOKING' });
  }, []);

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const bookingEvent = useSelector((store) => store.booking);

  function handleBooking() {
    history.push('/booking');
    console.log('button works');
  }

  const deleteEvent = (id) => {
    axios({
      method: 'DELETE',
      url: `/api/booking/${id}`,
    }).then((response) => {
      dispatch({type: 'FETCH_BOOKING'});
    })
    .catch((error) => {
      console.log('error', error)
    })
    
  };

  return (
    
     <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <h3>You have {bookingEvent.length} sessions booked</h3>
      <button onClick={handleBooking} className="btn">
        Book Now
      </button>
      <LogOutButton className="btn" />

      {bookingEvent.map((session) => {
        return (
            <div className="card" key={session.id}>
           
          <ul className="dots">
            <li>{session.lessons}</li>
            <li>{moment(session.date).format("MM/DD/YYYY")}</li>
            <li>{session.time}</li>
            <li>{session.notes}</li>
            <p className="fbTag">Feedback from the coach</p>
            <li>{session.feedback}</li>
            <button onClick={() => deleteEvent(session.id)} className="btn">Delete Session</button>
          </ul>
          </div>

        );
      })}
    </div>
    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

import React, {useState, useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import moment from 'moment';

function UserPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [feedback, setFeedback] = useState();

  useEffect(() => {
    console.log('in the event', adminList);
    dispatch({ type: 'GET_ADMIN_SESSIONS' });
  }, []);

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const adminList = useSelector((store) => store.admin);

  function redirectFeedback(id) {
    history.push('/admin')
    dispatch({
      type: 'GET_ADMIN_FEEDBACK',
      payload:{
        id: id
      } 
    })
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <h3>You have {adminList.length} upcoming sessions</h3>
      
      <LogOutButton className="btn" />

      {adminList.map((session) => {
        return (
          <div className="card" key={session.id}>
          <ul className="dots">
            <li>{session.lessons}</li>
            <li>{moment(session.date).format('MM/DD/YYYY')}</li>
            <li>{session.time}</li>
            <p className="pTag">Message from the client</p>
            <li>{session.notes}</li>
            <p className="pTag">Coach's feedback</p>
            <li>{session.feedback}</li>
            
            <button onClick={() => redirectFeedback(session.id)} className="btn">Leave Feedback</button>
          </ul>
          </div>
        );
      })}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;

import React from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import {useDispatch} from 'react-redux';

function Booking() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [lessons, setLessons] = useState('');
  const [notes, setNotes] = useState('');


  dispatch({
    type: 'BOOKING',
    payload: {

    }

  })



  function addSession() {
    history.push('/home');
    console.log('add session');
  }
  return (
    <div>
      <h1>Book Now</h1>
      <div>
        <TextField variant="outlined" color="secondary" type="date" />
      </div>
      <div>
      <TextField variant="outlined" color="secondary" type="time" />
      </div>
      <div>
      <select
            name="level"
            // value={level}
            id="level"
            // onChange={(event) => setLevel(event.target.value)}
          >
            <option value="">Lessons</option>
            <option value="Gates">Gate Start</option>
            <option value="Corners">Corners</option>
            <option value="Passing">Passing</option>
            <option value="Pumping">Pumping</option>
            <option value="Jumping">Jumping</option>
            name="level" required
          </select>
          <div></div>
        <TextField variant="outlined" color="secondary" type="text" placeholder="Notes for the coach" />
        </div> 
        <div>
      <button onClick={addSession} className="btn">
        Book Session
      </button>
      </div>
    </div>
  );
}

export default Booking;

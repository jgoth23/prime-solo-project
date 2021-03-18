import React from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Booking() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [lessons, setLessons] = useState('');
  const [notes, setNotes] = useState('');

  function addSession() {
    console.log('add session');

    dispatch({
      type: 'BOOKING',
      payload: {
        lessons: lessons,
        date: date,
        time: time,
        notes: notes,
      },
    });
    history.push('/home');
  }
  return (
    <div>
      <h1>Book Now</h1>
      <div>
        <TextField
          variant="outlined"
          color="secondary"
          type="date"
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div>
        <TextField
          variant="outlined"
          color="secondary"
          type="time"
          onChange={(event) => setTime(event.target.value)}
        />
      </div>
      <div>
        <select
          name="lessons"
          // value={level}
          id="lessons"
          // onChange={(event) => setLevel(event.target.value)}
          onChange={(event) => setLessons(event.target.value)}
        >
          <option value="">Lessons</option>
          <option value="Gates">Gate Start</option>
          <option value="Corners">Corners</option>
          <option value="Passing">Passing</option>
          <option value="Pumping">Pumping</option>
          <option value="Jumping">Jumping</option>
        </select>
        <div></div>
        <TextField
          variant="outlined"
          color="secondary"
          type="text"
          placeholder="Notes for the coach"
          onChange={(event) => setNotes(event.target.value)}
        />
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

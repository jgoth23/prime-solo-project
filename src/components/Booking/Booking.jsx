import React from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

function Booking() {
  const history = useHistory();

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
            onChange={(event) => setLevel(event.target.value)}
          >
            <option value="">Choose Class</option>
            <option value="Novice">Novice</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
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

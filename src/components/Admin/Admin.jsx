import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';




function Admin() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [feedback, setFeedback] = useState();
  const adminFeedback = useSelector((store) => store.feedback);

  console.log('coach feedback', adminFeedback)

  
  const submitFeedback = (adminFeedback) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id: adminFeedback[0].id,
        feedback: feedback
      }
    });
    history.push('/user');
  }
  return (
    <div>
    <div className="card">
    <ul className="dots">
      <li>
        {adminFeedback[0].lessons}
      </li>
      <li>
        {adminFeedback[0].date}
      </li>
      <li>
        {adminFeedback[0].time}
      </li>
      <li>
        {adminFeedback[0].notes}
      </li>

    </ul>
    <button onClick={() => submitFeedback(adminFeedback)} className="btn">Submit Feedback</button>
    </div>
    <textarea onChange={(event) => setFeedback(event.target.value)}></textarea>
    </div>
  )
}
export default Admin;
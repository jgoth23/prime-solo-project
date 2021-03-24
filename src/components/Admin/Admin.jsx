import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';



function Admin() {
  const dispatch = useDispatch();

  const [feedback, setFeedback] = useState();
  const adminFeedback = useSelector((store) => store.feedback);

  console.log('coach feedback', adminFeedback)

  
  const submitFeedback = (session) => {
    dispatch({
      type: "UPDATE",
      payload: {
        id: session.id,
        feedback: feedback
      }
    });
    
  }
  return (
    <div>
    <textarea onChange={(event) => setFeedback(event.target.value)}></textarea>
    <button onClick={() => submitFeedback(session)} className="btn">Submit Feedback</button>
    </div>

  )
}
export default Admin;
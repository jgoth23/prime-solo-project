import {useDispatch} from 'react-redux';
import {useState} from 'react';



function Admin() {
  const dispatch = useDispatch();

  const [feedback, setFeedback] = useState();

  function submitFeedback() {
    console.log('in feedback');
    dispatch({
      type: 'UPDATE',
      payload: feedback
    })
  }
  return (
    <button onClick={setFeedback}>Give Feedback</button>
  )
}
export default Admin;
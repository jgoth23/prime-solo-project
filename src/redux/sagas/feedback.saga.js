import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* feedbackSaga() {
  yield takeLatest('GET_ADMIN_FEEDBACK', getAdminFeedback);
}

function* getAdminFeedback(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    } 
    const response = yield axios.get(`/api/booking/${action.payload.id}`, config);
    yield put({type: 'SET_ADMIN_FEEDBACK', payload: response.data});
    console.log('res.data', response.data);
  }
  catch (error) {
    console.log('error with get', error);
  }
}

export default feedbackSaga;
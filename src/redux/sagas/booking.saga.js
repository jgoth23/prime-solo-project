import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* bookingSaga() {
  yield takeLatest('BOOKING', bookSession);
  yield takeLatest('FETCH_BOOKING', fetchSession);
  yield takeLatest('UPDATE', eventFeedback);
}

function* eventFeedback() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.put('/api/booking', config);

    yield put({type: 'FETCH_BOOKING', payload: action.payload})
  }
  catch (error) {
    console.log('failed to update', error);
  }
}

function* fetchSession() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

   const response =  yield axios.get('/api/booking', config);
   yield put({type: 'SET_BOOKING', payload: response.data});

  } catch (error) {
    console.log('failed get', error);
  }
}

function* bookSession(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    yield axios.post('api/booking', action.payload, config);
   
    yield put({type: 'FETCH_BOOKING'});

  } catch (error) {
    console.log('no booking', error);
  }
}



export default bookingSaga;
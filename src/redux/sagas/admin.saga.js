import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* adminSaga() {
  yield takeLatest('GET_ADMIN_SESSIONS', getAdminAllSession);
}

function* getAdminAllSession() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
    const response = yield axios.get('/api/admin', config);
    yield put({type: 'SET_ADMIN_SESSION', payload: response.data});
  }
  catch (error) {
    console.log('error in feedback', error);
  }
}

export default adminSaga;
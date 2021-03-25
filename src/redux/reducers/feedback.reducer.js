const initialState = {
  id: '',
  lessons: '',
  date: '',
  time: '',
  notes: ''
}
const feedbackReducer = (state = [initialState], action) => {
  switch(action.type) {
    case 'SET_ADMIN_FEEDBACK':
      return action.payload
      default: 
      return state;
  }
}
export default feedbackReducer;
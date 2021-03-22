const adminReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_ADMIN_SESSION':
      return action.payload
      default: 
      return state;
  }
}

export default adminReducer;
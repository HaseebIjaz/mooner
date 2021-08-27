import {
    GET_USER_DETAIL,
    GET_USER_BOOKING
  } from "../../actions/booking/booking.types";
  
  const INITIAL_STATE = {
    userData: [],
    booking:[],
    next: '',
    count: '',
    previous: '',
  };
  
  const bookingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case GET_USER_DETAIL:
        return { ...state, userData: action.payload};
      case GET_USER_BOOKING:
        return { ...state, 
          booking: action.payload.data.results,
          count: action.payload.data.count,
          next: action.payload.data.next,
          previous: action.payload.data.previous
        };
      default:
        return state;
    }
  };
  export default bookingReducer;
  
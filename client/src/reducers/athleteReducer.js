import { ADD_ATHLETE, GET_ATHLETES } from '../actions/types';

const initialState = {
  athletes: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ATHLETES:
      return {
        ...state,
        athletes: action.payload,
      };
    case ADD_ATHLETE:
      return {
        ...state,
        athletes: [...state.athletes, action.payload],
      };
    default:
      return state;
  }
}

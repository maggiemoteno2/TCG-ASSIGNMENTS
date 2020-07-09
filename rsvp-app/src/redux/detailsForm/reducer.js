
import {ADD_DETAILS} from './../actionTypes';
const initialState = {
  userDetails: []
};

export default function computers(state = initialState, action) {
  switch (action.type) {
    case ADD_DETAILS: {
        return{
          ...state,
          userDetails: [
            ...state.userDetails,
            action.payload
          ]
        }
    }
    default: {
      return state;
    }
  }
}
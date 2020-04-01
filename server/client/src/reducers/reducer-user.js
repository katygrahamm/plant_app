import { FETCH_USER } from '../actions/types';

export default function(state = [], action) {
    switch (action.type) {
      case FETCH_USER:
        console.log('action.payload.data', action.payload.data)
        return action.payload.data;
      default:
        return state;
    }
  }
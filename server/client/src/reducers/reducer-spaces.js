import { FETCH_SPACES } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SPACES :
        console.log('reducer-spaces', action.payload)
      return action.payload
    default:
      return state;
  }
}
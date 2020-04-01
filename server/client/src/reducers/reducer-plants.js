import { FETCH_PLANTS } from '../actions/types';


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PLANTS :
        console.log('reducer-plants', action.payload)
      return action.payload
    default:
      return state;
  }
}
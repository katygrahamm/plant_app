import { FETCH_PLANTDETAIL } from '../actions/types';


export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PLANTDETAIL :
        console.log('reducer-plantdetail', action.payload)
      return action.payload
    default:
      return state;
  }
}
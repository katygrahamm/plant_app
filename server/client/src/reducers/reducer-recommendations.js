import { FETCH_RECOMMENDATIONS } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_RECOMMENDATIONS:
      console.log('from plants action: ', action.payload)
      return action.payload
    default:
      return state;
  }
}
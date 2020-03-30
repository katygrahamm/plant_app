import { FETCH_PLANTS } from '../actions/types';

// import { normalize, schema } from 'normalizr';

// export default function(state = {}, action) {
//   switch (action.type) {
//     case FETCH_PLANTS:
//       const plant = new schema.Entity('plants');
//       const mySchema = { results: [ plant ] };

//       const normalizedPlants = normalize(action.payload, mySchema).entities.plants;

//       return {...normalizedPlants, ...state};
//     default:
//       return state;
//   }
// }


export default (state = [], action) => {
  switch (action.type) {
    case FETCH_PLANTS:
      console.log('from plants action: ', action.payload.data)
      return action.payload.data
    default:
      return state;
  }
}
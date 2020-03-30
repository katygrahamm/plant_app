import axios from "axios";
import { FETCH_PLANTS } from './types';

export const fetchPlants = () => dispatch => {
  axios.get(`/plants`
  ).then(function (response) {
    dispatch({ type: FETCH_PLANTS, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};



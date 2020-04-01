import axios from "axios";
import { FETCH_RECOMMENDATIONS, FETCH_PLANTS, ADD_COLLECTION, FETCH_USER, FETCH_PLANTDETAIL, ADD_USER, FETCH_DASHBOARD } from './types';


export const fetchUser= () => dispatch => {

  axios.get(`http://localhost:5000/current_user`, {credentials: 'include'}

).then(function (response) {
  console.log("current user responded", response)
  dispatch({ type: FETCH_USER, payload: response.data });
})
.catch(function (error) {
  console.log(error);
});
};

export const fetchPlantRecommendations = (name, water, light, kid_friendly, pet_friendly, difficulty, room_size, room_height) => dispatch => {
  
  const body = {"name":name, "water": water, "light": light, "kid_friendly": kid_friendly, "pet_friendly": pet_friendly, "difficulty": difficulty, "room_size": room_size, "room_height": room_height}
  
  console.log(body)

  axios.post(`http://localhost:5000/addspace`, body).then(function (response) {
    console.log(response)
    dispatch({ type: FETCH_RECOMMENDATIONS , payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const fetchPlants = () => dispatch => {
  axios.get(`http://localhost:5000/plantlibrary`
  ).then(function (response) {
    console.log('response from fetchplants', response)
    dispatch({ type: FETCH_PLANTS, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const addCollection = (plant) => dispatch => {

  const body = {'plant': plant }

  axios.post(`http://localhost:5000/collection`, body
  ).then(function (response) {
    console.log('response from addCollection', response)
    dispatch({ type: ADD_COLLECTION, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const fetchPlantDetail = (plant) => dispatch => {

  axios.get(`http://localhost:5000/${plant}/plantdetail`

  ).then(function (response) {
    console.log('response from fetchplants', response)
    dispatch({ type: FETCH_PLANTDETAIL , payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const addUser = (name) => dispatch => {

  const body = {"name": name}

  axios.post(`http://localhost:5000/adduser`, body

  ).then(function (response) {
    console.log('response from addUser', response)
    dispatch({ type: ADD_USER , payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};






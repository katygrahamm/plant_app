import axios from "axios";
import { FETCH_RECOMMENDATIONS, FETCH_PLANTS, ADD_COLLECTION, FETCH_PLANTDETAIL, ADD_USER, FETCH_DASHBOARD, ADD_SPACE, FETCH_SPACES } from './types';


export const createSpace = (userId, name, water, light, kid_friendly, pet_friendly, difficulty, room_size, room_height) => dispatch => {
  
  const body = {"name":name, "water": water, "light": light, "kid_friendly": kid_friendly, "pet_friendly": pet_friendly, "difficulty": difficulty, "room_size": room_size, "room_height": room_height}
  
  console.log(body)

  axios.post(`http://localhost:5000/${userId}/createSpace`, body).then(function (response) {
    console.log(response)
    dispatch({ type: ADD_SPACE , payload: response.data });
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

export const addSpace = (userId) => dispatch => {

  const body = { 'userId': userId }
  console.log(body)

  axios.post(`http://localhost:5000/${userId}/addspace`, body
  ).then(function (response) {
    console.log('response from addCollection', response)
    dispatch({ type: ADD_SPACE, payload: response.data });
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

export const addUser = (name, userId) => dispatch => {

  const body = {"name": name, "userId": userId}

  axios.post(`http://localhost:5000/adduser`, body

  ).then(function (response) {
    console.log('response from addUser', response)
    dispatch({ type: ADD_USER , payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const addCollection = (plant, userId) => dispatch => {

  const body = {'plant': plant, 'userId': userId }
  console.log(body)

  axios.post(`http://localhost:5000/createspace`, body
  ).then(function (response) {
    console.log('response from addCollection', response)
    dispatch({ type: ADD_COLLECTION, payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};


export const fetchSpaces = (userId) => dispatch => {

  axios.get(`http://localhost:5000/${userId}/userspaces`
  ).then(function (response) {
    console.log('response from fetchspaces', response)
    dispatch({ type: FETCH_SPACES , payload: response.data });
  })
  .catch(function (error) {
    console.log(error);
  });
};


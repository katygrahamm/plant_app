import { combineReducers } from "redux";
import RecommendationsReducer from "./reducer-recommendations";
import PlantsReducer from './reducer-plants'
import PlantDetailReducer from './reducer-plantdetail'
import AddUserReducer from './reducer-adduser'
import SpacesReducer from './reducer-spaces'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  recommendations: RecommendationsReducer,
  plants: PlantsReducer,
  user: AddUserReducer,
  plant: PlantDetailReducer,
  spaces: SpacesReducer
});

export default rootReducer;

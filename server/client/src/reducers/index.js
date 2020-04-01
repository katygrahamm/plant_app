import { combineReducers } from "redux";
import RecommendationsReducer from "./reducer-recommendations";
import PlantsReducer from './reducer-plants'
import UserReducer from './reducer-user'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  recommendations: RecommendationsReducer,
  plants: PlantsReducer,
  user: UserReducer
});

export default rootReducer;

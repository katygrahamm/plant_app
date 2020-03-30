import { combineReducers } from "redux";
import PlantsReducer from "./reducer-plants";
import TotalPagesReducer from "./reducer-pages";
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  plants: PlantsReducer,
  total_pages: TotalPagesReducer,
});

export default rootReducer;

import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";
import { render } from "react-dom";
import React from 'react';
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import Dashboard from './components/dashboard';
// import mainListItems from './components/listitems';
// import Title from './components/title';
import LandingPage from './components/landingpage'
import PlantLibrary from './components/plantlibrary'
import Recommendations from './components/recommendations'
import MyRoomsDashboard from './components/MyRoomsDashboard'
import MyPlantsDashboard from './components/MyPlantsDashboard'
import PlantLibraryDashboard from './components/PlantLibraryDashboard'
import PlantDetailDashboard from './components/PlantDetailDashboard'

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/myrooms" component={MyRoomsDashboard} />
            <Route exact path="/myplants" component={MyPlantsDashboard} />
            <Route exact path="/plantlibrary" component={PlantLibraryDashboard} />
            <Route exact path="/:plantId/plantdetail" component={PlantDetailDashboard} />
          </Switch>
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
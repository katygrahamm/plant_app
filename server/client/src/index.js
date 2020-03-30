import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { render } from "react-dom";
import React from 'react';
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";
import Dashboard from './components/dashboard';
import mainListItems from './components/listitems';
import Title from './components/title';


const store = createStore(rootReducer, {}, applyMiddleware(thunk));

render(
    <Provider store={store}>
      <BrowserRouter>
        <Dashboard />
        <mainListItems />
        <Title />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
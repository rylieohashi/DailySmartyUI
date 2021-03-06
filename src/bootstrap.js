import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import thunk from 'redux-thunk'; //and then apply thunk into applyMiddleware

import Home from "./components/home";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware(thunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore))); //thunk applied here

//import 'bootstrap/dist/css/bootstrap.css';
import "./style/main.scss";

import Results from './components/results';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
       <Switch>
         <Route path='/'exact component={Home}/> {/* the exact means it will only go there for that page i.e. Home */}
         <Route path='/results' component={Results}/> {/* these Routes set up what pages will get led to */}
       </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

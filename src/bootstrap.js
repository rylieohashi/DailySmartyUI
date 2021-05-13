import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

//import 'bootstrap/dist/css/bootstrap.css';
import "./style/main.scss";

import Results from './components/results';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
       <Switch>
         <Route path='/' component={Home}/>
         <Route path='/results' component={Results}/> {/* these Routes set up what pages will get led to */}
       </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

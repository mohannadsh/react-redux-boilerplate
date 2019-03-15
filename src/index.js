import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import {applyMiddleware, compose, createStore} from "redux";
import {reducers} from "./reducers/index";

import {Provider} from "react-redux";
import thunk from 'redux-thunk'

const enhancers  = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// the second parameter is the initial data;
const store = createStore(reducers, {user: "Test User"}, enhancers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

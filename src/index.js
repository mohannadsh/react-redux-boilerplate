import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {createStore} from "redux";
import {reducers} from "./reducers/index";

import {Provider} from "react-redux";

// the second parameter is the initial data;
const store = createStore(reducers, {user: "Test User"}, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

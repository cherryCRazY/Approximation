//Core
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//Tools
import { Provider } from "react-redux";
import { store as reduxStore } from "./bus/init/store";

//Components
import App from "./App";

//Styles
import "./index.scss";
import "antd/dist/antd.css";

const store = reduxStore;

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

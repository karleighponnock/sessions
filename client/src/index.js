import React from "react";
import reactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import Main from "./components/Main";
import { Provider } from "react-redux";
import { store } from "./store";
import "./style.css"

reactDOM.render(
    <Provider store={store}>
        <Main />
    </Provider>, document.querySelector('#root'));
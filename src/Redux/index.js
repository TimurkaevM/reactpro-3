import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import reducer from "./Reducer";

const logger = createLogger({
    diff: true,
    collapsed: true,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
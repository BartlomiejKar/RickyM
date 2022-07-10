import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from "../reducer/index";

export const store = createStore(reducers, applyMiddleware(thunk));

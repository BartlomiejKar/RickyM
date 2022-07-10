import { combineReducers } from "redux";
import getCharacters from "../reducer/characters";

const reducers = combineReducers({
  getCharacters,
});

export default reducers;

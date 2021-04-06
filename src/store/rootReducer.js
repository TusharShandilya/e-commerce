import { combineReducers } from "redux";
import { directoryReducer } from "./directory/directory-reducer";

export const rootReducer = combineReducers({
  directory: directoryReducer,
});

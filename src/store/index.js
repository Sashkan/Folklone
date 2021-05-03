import { combineReducers, createStore } from "redux";
import groupReducer from "./reducers/group";
import contactReducer from "./reducers/contact";

const combinedReducers = combineReducers({
  groups: groupReducer,
  contacts: contactReducer
});

const store = createStore(combinedReducers);

export default store;

import todoReducer from "./todo.reducer";
import countReducer from "./counter.reducer";
import { createStore,combineReducers } from "redux";

const reducer = combineReducers({counter:countReducer,todos:todoReducer})
const store=createStore(reducer)
export default store;
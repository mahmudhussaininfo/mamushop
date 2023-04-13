import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

//redux thunk setup
const middlewares = [thunk];

//create Store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

//export
export default store;

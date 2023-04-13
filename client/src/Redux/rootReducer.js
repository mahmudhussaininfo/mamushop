import { combineReducers } from "redux";
import shopReducer from "./Shop/shopReducer";

//combine reducer
const rootReducer = combineReducers({
  shop: shopReducer,
});

//export
export default rootReducer;

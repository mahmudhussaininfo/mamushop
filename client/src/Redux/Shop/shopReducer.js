import {
  CREATE_BRAND_SUCCESS,
  DELATE_BRAND_FAILD,
  DELATE_BRAND_SUCCESS,
  GET_BRAND_FAILD,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
} from "./actionType";
import { inicialState } from "./incialState";

//create redux reducer
const shopReducer = (state = inicialState, { type, payload }) => {
  switch (type) {
    case GET_BRAND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: payload,
      };
    case GET_BRAND_FAILD:
      return {
        ...state,
        loading: false,
        brands: [],
        error: payload,
      };
    case CREATE_BRAND_SUCCESS:
      return {
        ...state,
        brands: [...state.brands, payload],
      };
    case DELATE_BRAND_SUCCESS:
      return {
        ...state,
        brands: [...state.brands.filter((data) => data._id !== payload)],
      };

    default:
      return state;
  }
};

//export
export default shopReducer;

import axios from "axios";
import {
  CREATE_BRAND_FAILD,
  CREATE_BRAND_SUCCESS,
  DELATE_BRAND_FAILD,
  DELATE_BRAND_SUCCESS,
  GET_BRAND_FAILD,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
} from "./actionType";

//get all action
export const getAllBrands = () => async (dispatch) => {
  try {
    dispatch({ type: GET_BRAND_REQUEST });
    await axios
      .get("http://localhost:6060/api/v1/product/brands")
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: GET_BRAND_SUCCESS,
          payload: res.data.brands,
        });
      })
      .catch((error) => {});
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: GET_BRAND_FAILD,
      payload: error.response.message,
    });
  }
};

//CRETE BRANDS
export const createBrands =
  ({ data, setModal, setInput, setLogo }) =>
  async (dispatch) => {
    try {
      await axios
        .post("http://localhost:6060/api/v1/product/brands", data)
        .then((res) => {
          dispatch({ type: CREATE_BRAND_SUCCESS, payload: res.data.brand });
          setModal(false);
          setInput("");
          setLogo(null);
        })
        .catch((error) => {
          dispatch({
            type: CREATE_BRAND_FAILD,
            payload: error.response.data.message,
          });
        });
    } catch (error) {
      dispatch({
        type: CREATE_BRAND_FAILD,
        payload: error.response.data.message,
      });
    }
  };

//delate brands
export const delateBrands = (id) => async (dispatch) => {
  try {
    await axios
      .delete(`http://localhost:6060/api/v1/product/brands/${id}`)
      .then((res) => {
        dispatch({ type: DELATE_BRAND_SUCCESS, payload: id });
      })
      .catch((error) => {
        dispatch({
          type: DELATE_BRAND_FAILD,
          payload: error.response.data.message,
        });
      });
  } catch (error) {
    dispatch({
      type: DELATE_BRAND_FAILD,
      payload: error.response.data.message,
    });
  }
};

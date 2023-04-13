//create redux reducer
const shopReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case " ":
      return {
        ...state,
      };
    // case SUCCESS_BRAND_REQUEST:
    //   return {
    //     ...state,
    //     loading: false,
    //     brands: payload,
    //   };
    // case FAILD_BRAND_REQUEST:
    //   return {
    //     ...state,
    //     loading: false,
    //     brands: [],
    //     error: payload,
    //   };

    default:
      return state;
  }
};

//export
export default shopReducer;

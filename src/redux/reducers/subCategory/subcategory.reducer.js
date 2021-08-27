import {
  SUB_CATEGORY_LOADING,
  REMOVE_SUB_CATEGORY_LOADING,
  GET_ALL_SUB_CATEGORIES,
  CREATE_SUB_CATEGORIES,
  UPLOAD_IMAGE,
  REMOVE_SUB_CATEGORY,
  GET_SUB_CATEGORY
} from "../../actions/subCategory/subcategory.types";

const INITIAL_STATE = {
  data: [],
  particularSubCatgegory:{},
  loading: false,
};

const subCategoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_SUB_CATEGORIES:
      return { ...state, data: action.payload, loading: false };
    case GET_SUB_CATEGORY:
      return { ...state, particularSubCatgegory: action.payload[0], loading: false };
    case CREATE_SUB_CATEGORIES:
      return { ...state, data: action.payload, loading: false };
    case UPLOAD_IMAGE:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id === action.payload[0].id) return action.payload[0];
          return item;
        }),
        loading: false,
      };
    case SUB_CATEGORY_LOADING:
      return { ...state, loading: true };
    case REMOVE_SUB_CATEGORY_LOADING:
      return { ...state, loading: false };
    case REMOVE_SUB_CATEGORY:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
        loading: false,
      };
    default:
      return state;
  }
};
export default subCategoryReducer;

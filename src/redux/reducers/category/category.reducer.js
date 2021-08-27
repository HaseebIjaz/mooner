import {
  CATEGORY_LOADING,
  REMOVE_CATEGORY_LOADING,
  GET_ALL_CATEGORIES,
  CREATE_CATEGORIES,
  UPLOAD_IMAGE,
  REMOVE_CATEGORY,
  GET_CATEGORIES_BY_ID,
  GET_SUBCATEGORY_CHILD,
  GET_CATEGORY
} from "../../actions/category/category.types";

const INITIAL_STATE = {
    data: [],
    questionCatagory: '',
    questionSubCategoryChild: '',
    particularCategory:{},
    loading: false,
}

const categoryReducer = (state = INITIAL_STATE, action,) => {

    switch (action.type) {
        case GET_ALL_CATEGORIES:
            return { ...state, data: action.payload, questionCatagory: '', questionSubCategoryChild: '', loading: false, }
        case CREATE_CATEGORIES:
            return { ...state, data: action.payload, loading: false, }
        case GET_CATEGORY:
            return { ...state, particularCategory: action.payload[0], loading: false, }
        case GET_CATEGORIES_BY_ID:
            return { ...state, questionCatagory: action.payload, loading: false, }
        case GET_SUBCATEGORY_CHILD:
            return { ...state, questionSubCategoryChild: action.payload, loading: false, }
        case UPLOAD_IMAGE:
            return { ...state, data: state.data.map(item => {
                if (item.id === action.payload[0].id) return action.payload[0];
                return item;
              }), loading: false, }
        case CATEGORY_LOADING:
            return { ...state, loading: true }
        case REMOVE_CATEGORY_LOADING:
            return { ...state, loading: false }
        case REMOVE_CATEGORY:
            return { ...state, data:state.data.filter(item => item.id !== action.payload.id),loading: false }
        default:
            return state
    }
}
export default categoryReducer

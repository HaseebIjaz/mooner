import {
  createSubCategoryService,
  getAllSubCategoriesService,
  changeImageService,
  deleteCategoryService,
  updateCategoryService,
  getSubCategoryService
} from "../../../services/subCategory.service";
import {
  SUB_CATEGORY_LOADING,
  REMOVE_SUB_CATEGORY_LOADING,
  GET_ALL_SUB_CATEGORIES,
  CREATE_SUB_CATEGORIES,
  UPLOAD_IMAGE,
  REMOVE_SUB_CATEGORY,
  GET_SUB_CATEGORY
} from "./subcategory.types";
import { setLoading, clearErrors, setErrors,clearSnackbar,setSnackbar } from "../../../utils/global.actions";
import history from "../../../utils/history";


export const getAllSubCategories = (formDataCategory) => async (dispatch) => {
  try {
    dispatch(setLoading(SUB_CATEGORY_LOADING));
    const { data } = await getAllSubCategoriesService(formDataCategory);
    dispatch({
      type: GET_ALL_SUB_CATEGORIES,
      payload: data.data,
    });
  } catch (error) {
    dispatch(setLoading(REMOVE_SUB_CATEGORY_LOADING));
    // dispatch(setSnackbar(error.message,"error"));
  }
};
export const getParticularSubCategory = (id) => async (dispatch) => {
  try {
    dispatch(clearSnackbar());
    dispatch(setLoading(SUB_CATEGORY_LOADING));
    const { data } = await getSubCategoryService(id);
    dispatch({
      type: GET_SUB_CATEGORY,
      payload: data.data,
    });
  } catch (error) {
    dispatch(setLoading(REMOVE_SUB_CATEGORY_LOADING));
    dispatch(setSnackbar(error.message,"error"));
  }
};

export const changeImage = (formData, id) => async (dispatch) => {
  try {
    dispatch(clearSnackbar());
    dispatch(setLoading(SUB_CATEGORY_LOADING));
    const { data } = await changeImageService(formData, id);
    dispatch({
      type: UPLOAD_IMAGE,
      payload: data.data,
    });
  } catch (error) {
    dispatch(setLoading(REMOVE_SUB_CATEGORY_LOADING));
    dispatch(setSnackbar(error.message,"error"));
  }
};
export const createSubCategory = (formData) => async (dispatch) => {
  try {
    dispatch(clearSnackbar());
    dispatch(setLoading(SUB_CATEGORY_LOADING));
    const { data } = await createSubCategoryService(formData);
    if (data.status) {
      dispatch({
        type: CREATE_SUB_CATEGORIES,
        payload: data.data,
      });
      history.push("/mooner/details/categories");
      dispatch(setSnackbar("SubCategory Successfully Added!", "success"));
    } else {
      dispatch(setSnackbar(data.message,"error"));
      dispatch(setLoading(REMOVE_SUB_CATEGORY_LOADING));
    }
  } catch (error) {
    dispatch(setLoading(REMOVE_SUB_CATEGORY_LOADING));
    if (error.response.status === 400)
      return dispatch(
        setSnackbar(
          error.response.data.cat_icon || error.response.data.category_image,"error"
        )
      );
  }
};
export const updateCategory = (formData, id) => async (dispatch) => {
  try {
    dispatch(clearSnackbar());
    dispatch(setLoading(SUB_CATEGORY_LOADING));
    const { data } = await updateCategoryService(formData, id);
    history.push("/mooner/details/categories");
    dispatch(setSnackbar("SubCategory Updated Successfully!", "success"));
  } catch (error) {
    dispatch(setLoading(REMOVE_SUB_CATEGORY_LOADING));
    if (error.response.status === 400)
    return dispatch(
      setSnackbar(
        error.response.data.cat_icon || error.response.data.category_image,"error"
      )
    );
  }
};
export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch(clearErrors());
    dispatch(setLoading(SUB_CATEGORY_LOADING));
    await deleteCategoryService(id);
    dispatch({
      type: REMOVE_SUB_CATEGORY,
      payload: id,
    });
    history.push("/mooner/details/categories");
    dispatch(setSnackbar(data.message, "success"));
  } catch (error) {
    dispatch(setLoading(REMOVE_SUB_CATEGORY_LOADING));
    dispatch(setErrors(error.message));
  }
};

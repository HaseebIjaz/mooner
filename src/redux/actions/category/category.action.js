import {
  getAllCategories,
  createCategoryService,
  deleteCategoryService,
  updateCategoryService,
  changeImageService,
  getCategoryById,
  getSubcategoryChild,
  getCategoryService,
} from "../../../services/category.service";
import {
  CATEGORY_LOADING,
  REMOVE_CATEGORY_LOADING,
  GET_ALL_CATEGORIES,
  CREATE_CATEGORIES,
  UPLOAD_IMAGE,
  REMOVE_CATEGORY,
  GET_CATEGORIES_BY_ID,
  GET_SUBCATEGORY_CHILD,
  GET_CATEGORY,
} from "./category.types";
import {
  setLoading,
  clearSnackbar,
  setSnackbar,
} from "../../../utils/global.actions";
import history from "../../../utils/history";

export const getAllCategoriesAction = () => async (dispatch) => {
  try {
    dispatch(setLoading(CATEGORY_LOADING));
    const { data } = await getAllCategories();
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: data.data,
    });
  } catch (error) {
    dispatch(setLoading(REMOVE_CATEGORY_LOADING));
    // dispatch(setSnackbar(error.message,"error"));
  }
};
export const getParticularCategory = (id) => async (dispatch) => {
  try {
    dispatch(clearSnackbar());
    dispatch(setLoading(CATEGORY_LOADING));
    const { data } = await getCategoryService(id);
    dispatch({
      type: GET_CATEGORY,
      payload: data.data,
    });
  } catch (error) {
    dispatch(setLoading(REMOVE_CATEGORY_LOADING));
    dispatch(setSnackbar(error.message, "error"));
  }
};

export const getCategoriesByIdAction = (formData) => async (dispatch) => {
  try {
    dispatch(clearSnackbar());
    dispatch(setLoading(CATEGORY_LOADING));
    const { data } = await getCategoryById(formData);
    dispatch({
      type: GET_CATEGORIES_BY_ID,
      payload: data.data,
    });
  } catch (error) {
    dispatch(setLoading(REMOVE_CATEGORY_LOADING));
    dispatch(setSnackbar(error.message, "error"));
  }
};
export const createCategory = (formData) => async (dispatch) => {
  try {
    dispatch(clearSnackbar());
    dispatch(setLoading(CATEGORY_LOADING));
    const { data } = await createCategoryService(formData);
    if (data.status) {
      dispatch({
        type: CREATE_CATEGORIES,
        payload: data.data,
      });
      history.push("/mooner/details/categories");
      dispatch(setSnackbar("Category Successfully Added!", "success"));
    } else {
      dispatch(setSnackbar(data.message, "error"));
      dispatch(setLoading(REMOVE_CATEGORY_LOADING));
    }
  } catch (error) {
    dispatch(setLoading(REMOVE_CATEGORY_LOADING));
    if (error.response.status === 400)
      return dispatch(
        setSnackbar(
          error.response.data.cat_icon || error.response.data.category_image,
          "error"
        )
      );
  }
};

export const changeImage = (formData, id) => async (dispatch) => {
  try {
    dispatch(clearSnackbar());
    dispatch(setLoading(CATEGORY_LOADING));
    const { data } = await changeImageService(formData, id);
    dispatch({
      type: UPLOAD_IMAGE,
      payload: data.data,
    });
  } catch (error) {
    dispatch(setLoading(REMOVE_CATEGORY_LOADING));
    if (error.response.status === 400)
      return dispatch(
        setSnackbar(
          error.response.data.cat_icon || error.response.data.category_image,
          "error"
        )
      );
  }
};

export const updateCategory = (formData, id) => async (dispatch) => {
  try {
    console.log("update category");
    dispatch(clearSnackbar());
    dispatch(setLoading(CATEGORY_LOADING));
    const { data } = await updateCategoryService(formData, id);
    history.push("/mooner/details/categories");
    dispatch(setSnackbar("Category Updated Successfully!", "success"));
  } catch (error) {
    dispatch(setLoading(REMOVE_CATEGORY_LOADING));
    if (error.response.status === 400)
      return dispatch(
        setSnackbar(
          error.response.data.cat_icon || error.response.data.category_image,
          "error"
        )
      );
  }
};
export const deleteCategory = (id) => async (dispatch) => {
  try {
    dispatch(clearSnackbar());
    dispatch(setLoading(CATEGORY_LOADING));
    const { data } = await deleteCategoryService(id);
    if (data.status) {
      dispatch({
        type: REMOVE_CATEGORY,
        payload: id,
      });
      history.push("/mooner/details/categories");
      dispatch(setSnackbar(data.message, "success"));
    }
  } catch (error) {
    dispatch(setLoading(REMOVE_CATEGORY_LOADING));
    dispatch(setSnackbar(error.message, "error"));
  }
};

export const getSubcategoryChildAction = (formData) => async (dispatch) => {
  try {
    dispatch(clearSnackbar());
    dispatch(setLoading(CATEGORY_LOADING));
    const { data } = await getSubcategoryChild(formData);
    dispatch({
      type: GET_SUBCATEGORY_CHILD,
      payload: data.data,
    });
  } catch (error) {
    dispatch(setLoading(REMOVE_CATEGORY_LOADING));
    dispatch(setSnackbar(error.message, "error"));
  }
};

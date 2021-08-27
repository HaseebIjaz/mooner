import API from '../api';

const apiEndpoint = '/category_management/';

export const getAllCategories = async () =>
  await API.get(apiEndpoint + 'categories/');

export const getCategoryById = async (formData) =>
  await API.post(apiEndpoint + 'get_childs/', formData);
export const getSubcategoryChild = async (formData) =>
  await API.post(apiEndpoint + 'get_childs/', formData);
export const createCategoryService = async (formData) =>
  await API.post(apiEndpoint + 'categories/', formData);
export const updateCategoryService = async (formData, id) =>
  await API.put(apiEndpoint + 'categories/' + id, formData);
export const changeImageService = async (formData, id) =>
  await API.put(apiEndpoint + 'categories/' + id, formData);
export const deleteCategoryService = async (id) =>
  await API.post(apiEndpoint + 'soft_del_category/', {
    category_id: id,
  });
export const getCategoryService = async (id) =>
  await API.get(apiEndpoint + 'categories/' + id);

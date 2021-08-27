import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import errorReducer from './error/error.reducer';
import usersReducer from './users/users.reducer';
import categoryReducer from './category/category.reducer';
import subCategoryReducer from "./subCategory/subcategory.reducer";
import questionaireReducer from './questionaire/questionaire.reducer';
import loaderReducer from './loader/loader.reducer';
import ServiceProviderReducer from './spManagement/spManagement.reducer';
import bookingReducer from './booking/booking.reducer';
import faqReducer from "./faq/faq.reducer"
import ChangePassswordReducer from "./changePassword/changePassword.reducer";
import ticketReducer from "./ticket/ticket.reducer";
import documentReducer from "./document/document.reducer";
import reportReducer from "./reports/report.reducer";
import mlnReducer from "./mln/mln.reducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  loader: loaderReducer,
  users: usersReducer,
  category:categoryReducer,
  subCategory:subCategoryReducer,
  questionaire: questionaireReducer,
  booking: bookingReducer,
  spManagement: ServiceProviderReducer,
  faq:faqReducer,
  changepassword: ChangePassswordReducer,
  ticket:ticketReducer,
  document:documentReducer,
  report:reportReducer,
  mln: mlnReducer

});
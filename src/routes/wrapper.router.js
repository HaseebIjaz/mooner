import { connect } from "react-redux";
import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthRouter from "./auth.router";
import DashboardRoutes from "./dashboard.router";
import PrivateRoute from "./private.route";
import PageNotFound from "../common/PageNotFound";
const RouterWapper = () => {
  
  return (
    <Switch>
      <Route path="/auth" component={AuthRouter} />
      <PrivateRoute path="/mooner" component={DashboardRoutes} />
      <Route path='*' exact={true} component={PageNotFound} />
    </Switch>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(RouterWapper);

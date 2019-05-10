import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, val, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      val === "botQuestion" ? (
        auth.isAuthenticated === true ? (
          auth.user.role === "admin" ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        ) : (
          <Redirect to="/login" />
        )
      ) : auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);

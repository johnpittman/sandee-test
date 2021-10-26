import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

export interface AuthRouteProps extends RouteProps {
  authorized?: boolean;
  path?: string;
  children?: any;
}

function AuthRoute(props: AuthRouteProps) {
  return props.authorized ? (
    <Route {...props}>{props.children}</Route>
  ) : (
    <Redirect to="/" />
  );
}

export default AuthRoute;

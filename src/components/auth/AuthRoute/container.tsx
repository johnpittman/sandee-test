import React from "react";
import { useSelector } from "react-redux";

import Component, { AuthRouteProps } from "./component";
import { selectJWT } from "../../../redux/modules/auth/selectors";

function AuthRouteContainer(props: AuthRouteProps) {
  let jwt = useSelector(selectJWT);

  return (
    <Component authorized={jwt} {...props}>
      {props.children}
    </Component>
  );
}

export default AuthRouteContainer;

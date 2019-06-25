import React from "react";
import { Route, Redirect } from "react-router=dom";

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem("userToken")) {
                    return <Component {...props} />
                }
                return <Redirect to="/" />
            }}
        />
    );
}

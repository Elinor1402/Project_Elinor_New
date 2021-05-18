import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

 const PrivateRoute = ({path, component: Component, ...rest}) => {

    const isLogged = useSelector(state => state.usersReducer.isLogged);
    return (
        <Route path={path} {...rest} render={props => {
            if (isLogged === true) {
                return <Component {...props} {...rest} />;
            }
            return <Redirect to="/login" />
        }} />
    );
}
 export default PrivateRoute;

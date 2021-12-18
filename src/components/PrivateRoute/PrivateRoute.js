import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import initializeAuthentication from '../../Firebase/firebase.init';
import useAuth from '../../hooks/useAuth';

initializeAuthentication();

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();

    // console.log(user);
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    // return (
    //     <Route
    //         {...rest}
    //         render={({ location }) => user?.email ? children : <Redirect
    //             to={{
    //                 pathname: "/userlogin",
    //                 state: { from: location }
    //             }}
    //         ></Redirect>

    //         }
    //     >

    //     </Route>
    // );

    if(user.email)
    {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default PrivateRoute;
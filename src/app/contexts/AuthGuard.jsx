import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';

const AuthGuard = ({ children }) => {
    let { isAuthenticated } = useAuth();
    const { pathname } = useLocation();

    let authenticated = isAuthenticated;
    const isAuth = localStorage.getItem('authentication');

    return (
        <>{isAuth ? children : <Navigate replace to="/" state={{ from: pathname }} />}</>
    );
};

export default AuthGuard;
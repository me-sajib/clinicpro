import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }) => {

    const { pathname } = useLocation();
    const isAuth = localStorage.getItem('access_token');

    return (
        <>{isAuth ? children : <Navigate replace to="/" state={{ from: pathname }} />}</>
    );
};

export default AuthGuard;
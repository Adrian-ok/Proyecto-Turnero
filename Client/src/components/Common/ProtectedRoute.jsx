import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export const PrivateRoute = ({ element, redirectTo, ...props }) => {
    const { user, isAuthenticated } = useAuth

    console.log(user)

    return isAuthenticated ? (
        <Route {...props} element={element} />
    ) : (
        <Navigate to={redirectTo} replace />
    );
}

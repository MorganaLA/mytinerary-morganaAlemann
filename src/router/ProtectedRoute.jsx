import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';

// Componente ProtectedRoute
const ProtectedRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return !!token; // Devuelve true si el token existe, de lo contrario, false
    };

    return (
        <Route
            {...rest}
            render={props =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login" />
                )
            }
        />
    );
};


ProtectedRoute.propTypes = {
    component: PropTypes.elementType.isRequired, 
    path: PropTypes.string.isRequired,           
    exact: PropTypes.bool                      
};

export default ProtectedRoute;

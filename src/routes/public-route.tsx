import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'redux/selectors';

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { isAuth } = useAuth();
  const { state } = useLocation();
  return !isAuth ? <>{children}</> : <Navigate to={state ? state : '/'} />;
};

export default PublicRoute;

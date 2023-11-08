import { ReactNode, useEffect } from 'react';
import { useAuth } from 'redux/selectors';
import { authorization } from 'redux/slice/auth-slice';
import { useAppDispatch } from 'redux/store';
import { authUserThunk } from 'redux/thunk/auth-thunk';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authorization());
    if (auth.isAuth) {
      dispatch(authUserThunk());
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthProvider;

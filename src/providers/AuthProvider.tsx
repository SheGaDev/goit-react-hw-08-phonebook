import { ReactNode, useEffect } from 'react';
import { useAuth } from 'redux/selectors';
import { updateContacts } from 'redux/slice/contacts-slice';
import { setUser } from 'redux/slice/user-slice';
import { useAppDispatch } from 'redux/store';
import { fetchProfile } from 'services/auth-api';
import { authorizationAxios } from 'services/instance';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { isAuth, token } = useAuth();

  useEffect(() => {
    authorizationAxios(token);
    if (isAuth) {
      fetchProfile().then(({ name, email, contacts }) => {
        dispatch(setUser({ name, email, contacts: contacts.length }));
        dispatch(updateContacts(contacts));
      });
    }
  }, []);

  return <>{children}</>;
};

export default AuthProvider;

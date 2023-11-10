import Loader from 'components/loader/Loader';
import { ReactNode, useEffect, useState } from 'react';
import { useAuth } from 'redux/selectors';
import { updateContacts } from 'redux/slice/contacts-slice';
import { setUser } from 'redux/slice/user-slice';
import { useAppDispatch } from 'redux/store';
import { fetchProfile } from 'services/auth-api';
import { authorizationAxios } from 'services/instance';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();
  const { isAuth, token } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    authorizationAxios(token);
    if (isAuth) {
      setIsLoading(true);
      fetchProfile().then(({ name, email, contacts }) => {
        dispatch(setUser({ name, email, contacts: contacts.length }));
        dispatch(updateContacts(contacts));
        setIsLoading(false);
      });
    }
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {children}
    </>
  );
};

export default AuthProvider;

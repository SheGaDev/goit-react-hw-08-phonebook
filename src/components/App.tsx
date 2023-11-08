import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './layout/Layout';
import { useAuth } from 'redux/selectors';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

const App = () => {
  const { isAuth } = useAuth();

  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        {isAuth ? (
          <>
            <Route index element={<Home />} />
            <Route path={'contacts'} element={<Contacts />} />
          </>
        ) : (
          <>
            <Route path={'login'} element={<Login />} />
            <Route path={'register'} element={<Register />} />
          </>
        )}
      </Route>
    </Routes>
  );
};

export default App;

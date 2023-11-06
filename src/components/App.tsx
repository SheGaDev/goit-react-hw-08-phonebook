import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from 'routes/private-route';
import PublicRoute from 'routes/public-route';

import Layout from './layout/Layout';
import AuthLayout from './layout/AuthLayout';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const Register = lazy(() => import('pages/Register'));

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout />}>
        <Route index element={<PrivateRoute children={<Home />} />} />
        <Route path={'contacts'} element={<PrivateRoute children={<Contacts />} />} />
      </Route>
      <Route path={'/'} element={<AuthLayout />}>
        <Route path={'/login'} element={<PublicRoute children={<Login />} />} />
        <Route path={'/register'} element={<PublicRoute children={<Register />} />} />
      </Route>
    </Routes>
  );
};

export default App;

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/container/Container';
import Loader from 'components/loader/Loader';
import Navbar from 'components/navbar/Navbar';
import { useAuth } from 'redux/selectors';
import AuthNavbar from 'components/navbar/AuthNavbar';

const Layout = () => {
  const { isAuth } = useAuth();
  return (
    <>
      <Container>
        {isAuth ? <Navbar /> : <AuthNavbar />}
        <main className='flex flex-col  items-center justify-center gap-2 pt-4'>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default Layout;

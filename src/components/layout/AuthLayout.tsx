import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/container/Container';
import Loader from 'components/loader/Loader';
import AuthNavbar from 'components/navbar/AuthNavbar';

const AuthLayout = () => {
  return (
    <>
      <Container>
        <AuthNavbar />
        <main className='flex flex-col items-center justify-center pt-4'>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </Container>
    </>
  );
};

export default AuthLayout;

import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/container/Container';
import Loader from 'components/loader/Loader';
import Navbar from 'components/navbar/Navbar';

const Layout = () => {
  return (
    <>
      <Container>
        <Navbar />
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

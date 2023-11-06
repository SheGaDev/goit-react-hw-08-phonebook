import Header from 'components/header/Header';
import { Link } from 'react-router-dom';

const AuthNavbar = () => {
  return (
    <Header>
      <nav>
        <ul className='flex list-none justify-between gap-6 text-white'>
          <li className='hover:text-[#c1c1c1]'>
            <Link to={'/login'}>Login</Link>
          </li>
          <li>
            <Link className='hover:text-[#c1c1c1]' to={'/register'}>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
};

export default AuthNavbar;

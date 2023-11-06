import ButtonMenu from 'components/buttons/ButtonMenu';
import Header from 'components/header/Header';
import Menu from 'components/menu/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

  const onChange = () => {
    setIsActiveMenu((prev) => !prev);
  };

  return (
    <Header>
      <div className='flex items-center justify-between'>
        <nav>
          <ul className='flex list-none items-center justify-between gap-6 text-white'>
            <li className='hover:text-[#c1c1c1]'>
              <Link to={'/'}>Phonebook</Link>
            </li>
            <li>
              <Link className='hover:text-[#c1c1c1]' to={'/contacts'}>
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <div className='relative'>
          <ButtonMenu isActive={isActiveMenu} change={onChange} />
          {isActiveMenu && <Menu />}
        </div>
      </div>
    </Header>
  );
};

export default Navbar;

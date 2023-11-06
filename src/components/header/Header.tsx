import { ReactNode } from 'react';

const Header = ({ children }: { children: ReactNode }) => {
  return <header className='rounded-b-lg bg-black px-12 py-4'>{children}</header>;
};

export default Header;

import { ReactNode } from 'react';

const Container = ({ children }: { children: ReactNode }) => {
  return <div className='container mx-auto max-w-[560px] text-[20px]'>{children}</div>;
};

export default Container;

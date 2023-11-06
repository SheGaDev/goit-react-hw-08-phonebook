import { FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from 'react-icons/fa';

const ButtonMenu = ({ isActive, change }: { isActive: boolean; change: () => void }) => {
  return (
    <button className='flex items-center justify-center' type='button' onClick={change}>
      {isActive ? (
        <FaRegArrowAltCircleUp className='h-[30px] w-[30px] fill-[#fff] hover:fill-[#c1c1c1]' />
      ) : (
        <FaRegArrowAltCircleDown className='h-[30px] w-[30px] fill-[#fff] hover:fill-[#c1c1c1]' />
      )}
    </button>
  );
};

export default ButtonMenu;

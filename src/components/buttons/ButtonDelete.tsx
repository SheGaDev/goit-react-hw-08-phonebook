import { FaWindowClose } from 'react-icons/fa';
import { useAppDispatch } from 'redux/store';
import { deleteContactThunk } from 'redux/thunk/contacts-thunk';

const ButtonDelete = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  return (
    <button type='button' onClick={() => dispatch(deleteContactThunk(id))}>
      <FaWindowClose className='h-[40px] w-[40px] hover:fill-[#0faf1f]' />
    </button>
  );
};

export default ButtonDelete;

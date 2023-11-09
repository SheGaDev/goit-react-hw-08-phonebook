import { FaWindowClose } from 'react-icons/fa';
import { UpdateType, updateUser } from 'redux/slice/user-slice';
import { useAppDispatch } from 'redux/store';
import { deleteContactThunk } from 'redux/thunk/contacts-thunk';

const ButtonDelete = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  return (
    <button
      type='button'
      onClick={() => {
        dispatch(deleteContactThunk(id));
        dispatch(updateUser(UpdateType.Decrement));
      }}
    >
      <FaWindowClose className='h-[40px] w-[40px] hover:fill-[#0faf1f]' />
    </button>
  );
};

export default ButtonDelete;

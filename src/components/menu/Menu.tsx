import { useUser } from 'redux/selectors';
import { logout } from 'redux/slice/auth-slice';
import { useAppDispatch } from 'redux/store';

const Menu = () => {
  const user = useUser();
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(logout());
  };
  const maxLengthEmail = (text: string) =>
    text.length > 15 ? text.substring(0, 15) + '...' : text;
  return (
    <div className='absolute left-[-80px] top-[35px] flex animate-translate-down flex-col items-center justify-center gap-2 rounded border-[1px] border-[#1c1c1c] bg-[#adadad] p-2'>
      {user.email && <p>{maxLengthEmail(user.email)}</p>}
      <button
        onClick={onClick}
        className='bg-black px-2 py-1 text-[18px] text-white hover:text-[#c1c1c1]'
      >
        Logout
      </button>
    </div>
  );
};

export default Menu;

import { useUser } from 'redux/selectors';

const Profile = () => {
  const user = useUser();

  return (
    <>
      <h2>
        <b>Profile</b>
      </h2>
      <div className='flex w-[100%] flex-col justify-start gap-1 rounded border-[1px] border-black p-5'>
        <span className='animate-opacity-visible'>
          <b>Name: </b> {user.name}
        </span>
        <span className='animate-opacity-visible'>
          <b>Email: </b>
          {user.email}
        </span>
        <span className='animate-opacity-visible'>
          <b>Contacts: </b>
          {user.contacts}
        </span>
      </div>
    </>
  );
};

export default Profile;

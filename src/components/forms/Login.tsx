import Button, { ButtonType } from 'components/buttons/Button';
import Loader from 'components/loader/Loader';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAuth } from 'redux/selectors';
import { updateContacts } from 'redux/slice/contacts-slice';
import { setUser } from 'redux/slice/user-slice';
import { useAppDispatch } from 'redux/store';
import { authLoginThunk } from 'redux/thunk/auth-thunk';
import { fetchProfile } from 'services/auth-api';
import { ILoginForm } from 'types/auth-types';

const LoginForm = () => {
  const auth = useAuth();
  const [form, setForm] = useState<ILoginForm>({ email: '', password: '' });
  const dispatch = useAppDispatch();

  const handleInput = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(authLoginThunk(form)).then(() => {
      fetchProfile().then(({ name, email, contacts }) => {
        dispatch(setUser({ name, email, contacts: contacts.length }));
        dispatch(updateContacts(contacts));
      });
    });
    setForm({ email: '', password: '' });
  };

  return (
    <>
      {auth.isLoading && <Loader />}
      <form className='flex flex-col gap-2' onSubmit={onSubmit}>
        <label className='flex flex-col'>
          Email:
          <input onChange={handleInput} name='email' type='email' value={form.email} />
        </label>
        <label className='flex flex-col'>
          Password:
          <input
            onChange={handleInput}
            name='password'
            type='password'
            minLength={7}
            maxLength={32}
            value={form.password}
          />
        </label>
        <Button type={ButtonType.Submit} title='Login' />;
      </form>
    </>
  );
};

export default LoginForm;

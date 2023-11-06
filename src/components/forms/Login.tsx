import Button, { ButtonType } from 'components/buttons/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from 'redux/store';
import { authLoginThunk } from 'redux/thunk/auth-thunk';
import { ILoginForm } from 'types/auth-types';

const LoginForm = () => {
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
    dispatch(authLoginThunk(form));
    setForm({ email: '', password: '' });
  };

  return (
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
  );
};

export default LoginForm;

import Button, { ButtonType } from 'components/buttons/Button';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch } from 'redux/store';
import { authRegisterThunk } from 'redux/thunk/auth-thunk';
import { IRegisterForm } from 'types/auth-types';

const RegisterForm = () => {
  const [form, setForm] = useState<IRegisterForm>({ name: '', email: '', password: '' });
  const dispatch = useAppDispatch();

  const handleInput = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(authRegisterThunk(form));
    setForm({ name: '', email: '', password: '' });
  };

  return (
    <form className='flex flex-col gap-2' onSubmit={onSubmit}>
      <label className='flex flex-col'>
        Name:
        <input
          onChange={handleInput}
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={form.name}
        />
      </label>
      <label className='flex flex-col'>
        Email:
        <input onChange={handleInput} type='email' name='email' required value={form.email} />
      </label>
      <label className='flex flex-col'>
        Password
        <input
          onChange={handleInput}
          type='password'
          name='password'
          minLength={7}
          maxLength={32}
          required
          value={form.password}
        />
      </label>
      <Button type={ButtonType.Submit} title='Send' />
    </form>
  );
};

export default RegisterForm;

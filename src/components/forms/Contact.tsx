import { useState, ChangeEvent, FormEvent } from 'react';
import Button, { ButtonType } from 'components/buttons/Button';
import { IContactForm } from 'types/contacts-types';
import { useAppDispatch } from 'redux/store';
import { useContacts } from 'redux/selectors';
import { addContactThunk } from 'redux/thunk/contacts-thunk';
import { UpdateType, updateUser } from 'redux/slice/user-slice';

const ContactForm = () => {
  const [form, setForm] = useState<IContactForm>({ name: '', number: '' });
  const dispatch = useAppDispatch();

  const { items: contacts } = useContacts();

  const handleInput = (e: ChangeEvent) => {
    const { name, value }: { name: string; value: string } = e.target as HTMLInputElement;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setForm({ name: '', number: '' });
    if (contacts.some((cont) => cont.name.toLowerCase() === form.name.toLowerCase())) {
      alert(`${form.name} is arleady in contacts.`);
      return;
    }
    dispatch(addContactThunk({ ...form }));
    dispatch(updateUser(UpdateType.Increment));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex w-[100%] flex-col items-center justify-center gap-3 rounded border-[1px] border-black p-5'
    >
      <label className='flex w-[50%] flex-col gap-1'>
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
      <label className='flex w-[50%] flex-col gap-1'>
        Number:
        <input
          onChange={handleInput}
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
          value={form.number}
        />
      </label>
      <Button type={ButtonType.Submit} title='Add contact' />
    </form>
  );
};

export default ContactForm;

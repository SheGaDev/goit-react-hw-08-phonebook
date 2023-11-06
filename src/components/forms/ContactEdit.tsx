import { useState, FormEvent, ChangeEvent } from 'react';
import Button, { ButtonType } from 'components/buttons/Button';
import { IContact } from 'types/contacts-types';
import { useAppDispatch } from 'redux/store';
import { editContactThunk } from 'redux/thunk/contacts-thunk';

const ContactEdit = ({ contact, onClose }: { contact: IContact; onClose: () => void }) => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<IContact>(contact);

  const handleInput = (e: ChangeEvent) => {
    const { name, value }: { name: string; value: string } = e.target as HTMLInputElement;
    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setForm({ name: '', number: '', id: '' });
    dispatch(editContactThunk({ ...form }));
    onClose();
  };
  const onCancel = () => {
    setForm({ name: '', number: '', id: '' });
    onClose();
  };

  return (
    <div className='fixed left-0 top-0 h-[100%] w-[100%] backdrop-blur-sm'>
      <div className='absolute left-[50%] top-[50%] flex w-[560px] translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded border-[1px] border-black bg-[#c1c1c1] p-4'>
        <h3>
          <b>Edit contact</b>
        </h3>
        <form
          className='flex w-[100%] flex-col items-center justify-center gap-3 p-1'
          onSubmit={handleSubmit}
        >
          <label className='flex w-[100%] flex-col items-center'>
            Name:
            <input
              onChange={handleInput}
              className='w-[90%] p-1'
              type='text'
              name='name'
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={form.name}
            />
          </label>
          <label className='flex w-[100%] flex-col items-center'>
            Number:
            <input
              onChange={handleInput}
              className='w-[90%] p-1'
              type='tel'
              name='number'
              pattern='\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}'
              title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
              required
              value={form.number}
            />
          </label>
          <div className='flex justify-center gap-4'>
            <Button type={ButtonType.Submit} title='Edit contact' />
            <button
              type='button'
              onClick={onCancel}
              className='rounded border-[1px] border-black px-4 hover:bg-white'
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactEdit;

import { IContact } from 'types/contacts-types';

const ButtonEdit = ({
  editContact,
  contact,
}: {
  editContact: (contact: IContact) => void;
  contact: IContact;
}) => {
  return (
    <button
      type='button'
      className='h-[36px] rounded bg-black px-4 text-[16px] text-white hover:bg-[#c1c1c1] hover:text-black'
      onClick={() => editContact(contact)}
    >
      Edit
    </button>
  );
};

export default ButtonEdit;

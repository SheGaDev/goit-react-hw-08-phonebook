import { useState } from 'react';
import ButtonDelete from 'components/buttons/ButtonDelete';
import ButtonEdit from 'components/buttons/ButtonEdit';
import ContactEdit from 'components/forms/ContactEdit';
import { useContacts } from 'redux/selectors';
import { IContact } from 'types/contacts-types';
import Loader from 'components/loader/Loader';

const ContactList = () => {
  const [openForm, setOpenForm] = useState<{ isOpen: boolean; contact: IContact }>({
    isOpen: false,
    contact: { name: '', number: '', id: '' },
  });
  const contacts = useContacts();

  const editContact = (contact: IContact) => {
    setOpenForm((prev) => ({ isOpen: !prev.isOpen, contact }));
  };

  const closeFormEdit = () => {
    setOpenForm((prev) => ({ isOpen: !prev.isOpen, contact: { name: '', number: '', id: '' } }));
  };

  return (
    <>
      {contacts.isLoading && <Loader />}
      <div className='flex w-[100%] flex-col items-center justify-center rounded border-[1px] border-black p-4'>
        {openForm.isOpen && <ContactEdit contact={openForm.contact} onClose={closeFormEdit} />}
        {contacts?.items?.length !== 0 ? (
          <ul className='flex w-[90%] flex-col gap-3'>
            {contacts.items.map((contact) => (
              <li
                key={contact.id}
                className='group/item flex w-[100%] animate-translate-down justify-between rounded p-2 shadow hover:bg-slate-100'
              >
                <div className='flex flex-col'>
                  <span>Name: {contact.name}</span>
                  <span>Number: {contact.number}</span>
                </div>
                <div className='group/edit invisible flex animate-[translate-down] items-center gap-3 group-hover/item:visible'>
                  <ButtonEdit editContact={editContact} contact={contact} />
                  <ButtonDelete id={contact.id} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <span>
            <b>Empty!</b>
          </span>
        )}
      </div>
    </>
  );
};

export default ContactList;

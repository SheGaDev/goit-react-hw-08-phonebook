import ContactList from 'components/contact-list/ContactList';
import ContactForm from 'components/forms/Contact';
import Filter from 'components/forms/Filter';

const ContactsPage = () => {
  return (
    <>
      <h2>
        <b>Contacts</b>
      </h2>
      <ContactForm />
      <Filter />
      <ContactList />;
    </>
  );
};

export default ContactsPage;

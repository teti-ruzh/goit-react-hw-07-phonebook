import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
import { selectVisibleContacts } from '../../redux/selectors';

// const getVisibleContacts = (contacts, query) => {
//   return contacts.filter(({ name }) =>
//     name.toLowerCase().includes(query.toLowerCase())
//   );
// };

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const query = useSelector(selectFilterQuery);
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts &&
        contacts.map(contact => <ContactItem key={contact.id} {...contact} />)}
    </ul>
  );
};

export default ContactList;

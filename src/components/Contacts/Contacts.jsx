import { ContactProfile } from 'components/ContactProfile';
import PropTypes from 'prop-types';

export default function Contacts({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <ContactProfile key={id} id={id} name={name} />
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
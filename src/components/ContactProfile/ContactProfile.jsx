import { StyledContact } from './ContactProfile.styled';
import PropTypes from 'prop-types';

export default function ContactProfile({ id, name, number }) {
  return (
    <StyledContact>
      {name}: {number}
    </StyledContact>
  );
}

ContactProfile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

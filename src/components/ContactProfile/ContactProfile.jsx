import { StyledContact } from './ContactProfile.styled';
import PropTypes from 'prop-types';

export default function ContactProfile({ id, name }) {
  return <StyledContact>{name}</StyledContact>;
}

ContactProfile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button({ children, handler }) {
  return (
    <StyledButton type="button" onClick="handler">
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handler: PropTypes.func.isRequired,
};

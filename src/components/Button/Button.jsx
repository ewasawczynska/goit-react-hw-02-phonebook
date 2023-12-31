import { StyledButton } from './Button.styled';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { type = 'button', handler = null, children: text } = props;
  return (
    <StyledButton type={type} onClick={handler}>
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

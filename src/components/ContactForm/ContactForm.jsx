import { StyledForm } from './ContactForm.styled';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import PropTypes from 'prop-types';

export default function ContactForm({ handler }) {
  return (
    <StyledForm onSubmit={handler}>
      <label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
}

ContactForm.propTypes = {
  handler: PropTypes.func.isRequired,
};

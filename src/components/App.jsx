import { Component } from 'react';
import {
  Button,
  ContactForm,
  ContactProfile,
  Contacts,
  Container,
  Section,
} from 'components';

export default class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <Container>
        <Section title={'Phonebook'}></Section>
        <Section title={'Contacts'}>
          <Contacts></Contacts>
        </Section>
      </Container>
    );
  }
}

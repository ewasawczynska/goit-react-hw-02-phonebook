import { Component } from 'react';
import {
  Button,
  ContactForm,
  ContactProfile,
  Contacts,
  Container,
  Section,
} from 'components';
import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson' },
      { id: 'id-2', name: 'Hermione Kline' },
      { id: 'id-3', name: 'Eden Clements' },
    ],
    name: '',
    filter: '',
  };

  addNewContact = e => {
    const form = e.target;
    const {
      name: { value: name },
    } = form.element;

    const existingContact = this.checkIfContactExist(name);

    if (!existingContact) {
      const newContact = {
        id: nanoid(),
        name,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
    e.preventDefault();
  };

  checkIfContactExist(name) {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }

  render() {
    const { contacts, filter } = this.state;
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
    );
    return (
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm handler={this.addNewContact} />
        </Section>
        <Section title={'Contacts'}>
          <Contacts contacts={filtredContacts} />
        </Section>
      </Container>
    );
  }
}

import { Component } from 'react';

import { ContactForm, Contacts, Container, Section } from 'components';

import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    ],
    name: '',
    number: '',
  };

  addNewContact = e => {
    const form = e.target;
    const {
      name: { value: name },
      number: { value: number },
    } = form.elements;

    const existingContact = this.checkIfContactExist(name);

    if (!existingContact) {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
      form.reset();
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
    const { contacts } = this.state;
    return (
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm handler={this.addNewContact} />
        </Section>
        <Section title={'Contacts'}>
          <Contacts contacts={contacts} />
        </Section>
      </Container>
    );
  }
}

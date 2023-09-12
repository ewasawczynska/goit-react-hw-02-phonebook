import { Component } from 'react';

import {
  ContactForm,
  Contacts,
  Container,
  InputFiltr,
  Section,
} from 'components';

import { nanoid } from 'nanoid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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
    } else {
      alert(`${name} already exists!`);
    }

    e.preventDefault();
  };

  checkIfContactExist(name) {
    const { contacts } = this.state;
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = id => {
    const deletedContact = this.state.contacts.find(
      contact => contact.id === id
    );
    if (deletedContact) {
      this.setState(state => ({
        contacts: state.contacts.filter(contact => contact.id !== id),
      }));
      alert(`${deletedContact.name} has beedn removed!`);
    }
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <Container>
        <Section title={'Phonebook'}>
          <ContactForm handler={this.addNewContact} />
        </Section>
        <Section title={'Contacts'}>
          <InputFiltr value={filter} onChange={this.handleFilterChange} />
          <Contacts
            contacts={filteredContacts}
            handleDelete={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}

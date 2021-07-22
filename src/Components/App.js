import React, { Component } from 'react';

import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';

import { v4 as uuidv4 } from 'uuid';

const filterContactsWithQuery = (contacts, filter) =>
  contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

export default class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem('tasks');

    if (persistedContacts) {
      const contacts = JSON.parse(persistedContacts);

      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('tasks', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (contactName, number) => {
    const { contacts } = this.state;

    const isExistingContact = !!contacts.find(
      ({ name }) => name === contactName
    );

    return isExistingContact
      ? alert(`${contactName} is already in contacts!`)
      : this.setState({
          contacts: [
            ...this.state.contacts,
            { name: contactName, number, id: uuidv4() },
          ],
        });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  handleFilterContacts = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = filterContactsWithQuery(contacts, filter);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.handleFilterContacts} />
        <ContactList
          updatedList={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList/ContactList";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState((prevState) => {
      const existedContacts = prevState.contacts.map((cont) => cont.name);
      const newName = contact.name;

      return {
        contacts: !existedContacts.includes(newName)
          ? [...prevState.contacts, contact]
          : prevState.contacts,
      };
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    // this.props.onsubmit({
    // id: uuidv4(),
    // name: this.state.name,
    // number: this.state.number,
    // })...  THIS IS FOR USING IN COMPONENT ContactForm
    this.setState({
      [name]: value,
    });
  };

  changeFilter = (e) => {
    const { name, value } = e;
    this.setState({
      [name]: value,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return (
      contacts.length > 0 &&
      contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  render() {
    const { filter, name, number } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <Section title="Phonebook">
          <ContactForm
            // onSubmit={this.addContact}
            contacts={visibleContacts}
            name={name}
            number={number}
            onAddContact={this.addContact}
            onHandleChange={this.handleChange}
          />
        </Section>

        <Section title="Contacts">
          <Filter onChangeFilter={this.changeFilter} value={filter} />
          <ContactList
            onVisibleTasks={this.getVisibleContacts}
            contacts={visibleContacts}
          />
        </Section>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList/ContactList";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
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
      this.state.contacts.length > 0 &&
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm
            state={this.state}
            onAddContact={this.addContact}
            onHandleChange={this.handleChange}
          />
        </Section>

        <Section title="Contacts">
          <Filter onChangeFilter={this.changeFilter} state={this.state} />
          <ContactList
            onVisibleTasks={this.getVisibleContacts}
            state={this.state}
          />
        </Section>
      </div>
    );
  }
}

export default App;

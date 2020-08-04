import React, { Component } from "react";
import Section from "./components/Section/Section";
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

  // getVisibleContacts = () => {
  //   const { contacts, filter } = this.state;

  //   return (
  //     this.state.contacts.length > 0 &&
  //     contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(filter.toLowerCase())
  //     )
  //   );
  // };

  //   Достаточно выделить четыре компонента: форма добавления контактов, список контактов, элемент списка контактов и фильтр поиска.

  // <div>
  //   <h1>Phonebook</h1>
  //   <ContactForm ... />

  //   <h2>Contacts</h2>
  //   <Filter ... />
  //   <ContactList ... />
  // </div>

  render() {
    return (
      <div>
        <Section
          appState={this.state}
          title="Phonebook"
          onAddContact={this.addContact}
          onHandleChange={this.handleChange}
        />

        <section>
          <h2>Contacts</h2>

          <label>
            <input
              type="text"
              name="filter"
              value={this.state.filter}
              onChange={(e) => this.changeFilter(e.target)}
            />
          </label>

          <ul>
            {/* {visibleTasks.length > 0 &&
              visibleTasks.map((contact) => (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              ))} */}
            {this.state.contacts.length > 0 &&
              this.state.contacts.map((contact) => (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default App;

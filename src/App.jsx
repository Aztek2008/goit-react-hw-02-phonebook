import React, { Component } from "react";
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
      return {
        contacts: [...prevState.contacts, contact],
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
    console.log("e.target: ", e);
    const { name, value } = e;
    this.setState({
      [name]: value,
    });

    // eturn tasks.filter(task =>
    //   task.text.toLowerCase().includes(filter.toLowerCase()),
    // );
  };

  render() {
    return (
      <div>
        <section>
          <h2>Phonebook</h2>
          <form onSubmit={this.addContact}>
            <label>
              <p>Name</p>
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
              />
            </label>

            <label>
              <p>Number</p>
              <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.handleChange}
              />
            </label>

            <button type="submit">Add Contact</button>
          </form>
        </section>
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
            {this.state.contacts.length > 0 &&
              this.state.contacts.map((contact) => (
                <li>
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

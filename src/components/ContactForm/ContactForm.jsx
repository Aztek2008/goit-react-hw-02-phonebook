import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import { v4 as uuidv4 } from "uuid";

export default class ContactForm extends Component {
  state = {
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

  render() {
    console.log("props", this.props);
    console.log("PropTypes", this.PropTypes);

    const { name, number } = this.state;

    return (
      <form className={styles.ContactForm} onSubmit={this.addContact}>
        <label>
          <p>Name</p>
          <input
            type="text"
            value={name}
            onChange={this.handleChange}
            name="name"
          />
        </label>

        <label>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>

        <button className={styles.ContactFormButton} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
//====================================================================================
// import React from "react";
// import styles from "./ContactForm.module.css";

// export default function ContactForm({
//   name,
//   number,
//   onAddContact,
//   onHandleChange,
// }) {
//   return (
//     <form className={styles.ContactForm} onSubmit={onAddContact}>
//       <label>
//         <p>Name</p>
//         <input type="text" value={name} onChange={onHandleChange} name="name" />
//       </label>

//       <label>
//         <p>Number</p>
//         <input
//           type="tel"
//           name="number"
//           value={number}
//           onChange={onHandleChange}
//         />
//       </label>

//       <button className={styles.ContactFormButton} type="submit">
//         Add Contact
//       </button>
//     </form>
//   );
// }

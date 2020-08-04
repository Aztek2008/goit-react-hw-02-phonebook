import React from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({ state, onAddContact, onHandleChange }) {
  return (
    <form className={styles.ContactForm} onSubmit={onAddContact}>
      <label>
        <p>Name</p>
        <input
          type="text"
          value={state.name}
          onChange={onHandleChange}
          name="name"
        />
      </label>

      <label>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          value={state.number}
          onChange={onHandleChange}
        />
      </label>

      <button className={styles.ContactFormButton} type="submit">
        Add Contact
      </button>
    </form>
  );
}

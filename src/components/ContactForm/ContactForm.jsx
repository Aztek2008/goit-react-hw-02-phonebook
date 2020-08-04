import React from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm({
  state,
  onCreateContact,
  onCreateChange,
}) {
  return (
    <form onSubmit={onCreateContact}>
      <label>
        <p>Name</p>
        <input
          type="text"
          value={state.name}
          onChange={onCreateChange}
          name="name"
        />
      </label>

      <label>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          value={state.number}
          onChange={onCreateChange}
        />
      </label>

      <button type="submit">Add Contact</button>
    </form>
  );
}

import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import styles from "./Section.module.css";

export default function Section({
  appState,
  title,
  onAddContact,
  onHandleChange,
}) {
  return (
    <section className={styles.Section}>
      <h2>{title}</h2>
      <ContactForm
        state={appState}
        onCreateContact={onAddContact}
        onCreateChange={onHandleChange}
      />
    </section>
  );
}

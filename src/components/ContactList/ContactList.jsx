import React from "react";

export default function ContactList({ state, onVisibleTasks }) {
  return (
    <ul>
      {onVisibleTasks.length > 0 &&
        onVisibleTasks.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))}
      {/* {state.contacts.length > 0 &&
        state.contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))} */}
    </ul>
  );
}

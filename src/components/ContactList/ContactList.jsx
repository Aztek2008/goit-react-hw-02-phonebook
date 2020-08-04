import React from "react";

export default function ContactList({ contacts, onVisibleTasks }) {
  return (
    <ul style={{ padding: 0 }}>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        ))
      ) : (
        <p style={{ margin: 0, fontSize: 14, color: "grey" }}>No match...</p>
      )}
    </ul>
  );
}

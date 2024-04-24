import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";
import initialContacts from "../../contacts.json";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);

  const addContact = (newContact) => {
    setContacts((initialContacts) => {
      return [...initialContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    console.log(contactId);
    setContacts((contacts) => {
      return contacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox />
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </div>
  );
}

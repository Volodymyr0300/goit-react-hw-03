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
  console.log(contacts);
  const addContact = (newContact) => {
    setContacts((initialContacts) => {
      return [...initialContacts, newContact];
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contacts, onDeleteContact }) {
  //   console.log(contacts);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}

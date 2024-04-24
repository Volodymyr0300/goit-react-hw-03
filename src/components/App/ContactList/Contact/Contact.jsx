import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact(contact) {
  return (
    <div className={css.container} id={contact.data.id}>
      <div className={css.dataContainer}>
        <div className={css.userContainer}>
          <FaUser className={css.userIcon} />
          <span className={css.userName}>{contact.data.name}</span>
        </div>
        <div className={css.phoneContainer}>
          <FaPhoneAlt className={css.phoneIcon} />
          <span className={css.userPhone}>{contact.data.number}</span>
        </div>
      </div>
      <div className={css.btnContainer}>
        <button type="button" className={css.btns}>
          Delete
        </button>
      </div>
    </div>
  );
}

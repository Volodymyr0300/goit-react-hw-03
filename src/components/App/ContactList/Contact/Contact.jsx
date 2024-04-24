import css from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

export default function Contact({
  data: { id, name, number },
  onDeleteContact,
}) {
  //   console.log(contact.data);
  return (
    <div className={css.container} id={id}>
      <div className={css.dataContainer}>
        <div className={css.userContainer}>
          <FaUser className={css.userIcon} />
          <span className={css.userName}>{name}</span>
        </div>
        <div className={css.phoneContainer}>
          <FaPhoneAlt className={css.phoneIcon} />
          <span className={css.userPhone}>{number}</span>
        </div>
      </div>
      <div className={css.btnContainer}>
        <button
          type="button"
          className={css.btn}
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useId } from "react";
import { nanoid } from "nanoid";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required"),
});

const initialValues = {
  username: "",
  number: "",
};

export default function ContactForm({ onAddContact }) {
  const usernameFieldId = useId();
  const numberFieldId = useId();

  const contactId = nanoid();

  const handleSubmit = (values, actions) => {
    onAddContact({
      id: contactId,
      name: values.username,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor={usernameFieldId}>Name</label>
            <Field type="text" name="username" id={usernameFieldId} />
            <ErrorMessage name="username" as="span" />
          </div>
          <div className={css.formGroup}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field type="text" name="number" id={numberFieldId} />
            <ErrorMessage name="number" as="span" />
          </div>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}

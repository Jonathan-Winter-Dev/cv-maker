import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactCv from "./ContactCv";

export function Contact() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);

    setContact({
      fName: dataObject.fName,
      lName: dataObject.lName,
      email: dataObject.email,
      phone: dataObject.phone,
    });
  }

  return (
    <>
      <ContactForm handleSubmit={handleSubmit} />
      <ContactCv contact={contact} />
    </>
  );
}

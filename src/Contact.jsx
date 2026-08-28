import { useState } from "react";

export default function Contact() {
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

  function ContactForm() {
    return (
      <form onSubmit={handleSubmit}>
        <label for="fName">First Name:</label>
        <input type="text" name="fName" id="fName" required />
        <label for="fName">Last Name:</label>
        <input type="text" name="lName" id="lName" required />
        <label for="fName">Email:</label>
        <input type="email" name="email" id="email" />
        <label for="fName">Phone Number:</label>
        <input type="tel" name="phone" id="phone" />
        <input type="submit" />
      </form>
    );
  }

  return (
    <>
      <ContactForm />
      <p>{contact.fName}</p>
      <p>{contact.lName}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </>
  );
}

import { useState } from "react";

export default function Contact() {
  const [firstName, setFirstname] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);
    setFirstname(dataObject.fname);
    console.log(dataObject);
  }

  function handleChange(e) {
    setFirstname(e.target.value);
  }

  function ContactForm() {
    return (
      <form onSubmit={handleSubmit}>
        <label for="fname">First Name</label>
        <input
          type="text"
          name="fname"
          id="fname"
          // onChange={handleChange}
        />
        <input type="submit" />
      </form>
    );
  }

  return (
    <>
      <ContactForm />
      <p>{firstName}</p>
    </>
  );
}

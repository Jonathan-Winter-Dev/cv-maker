import { useState } from "react";

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const dataObject = Object.fromEntries(formData);
}

function ContactForm() {
  const [firstName, setFirstname] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <label for="fname">First Name</label>
      <input type="text" name="fname" id="fname" />
      <input type="submit" />
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <ContactForm />
      <p>First Name Here</p>
    </>
  );
}

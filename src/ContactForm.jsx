export default function ContactForm({ updateContact }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);

    const contactData = {
      fName: dataObject.fName,
      lName: dataObject.lName,
      email: dataObject.email,
      phone: dataObject.phone,
    };

    updateContact(contactData);
  }

  return (
    <form onSubmit={handleSubmit} id="contactForm">
      <fieldset>
        <div className="fieldContainer">
          <label for="fName">First Name:</label>
          <input type="text" name="fName" id="fName" required />
        </div>
        <div className="fieldContainer">
          <label for="fName">Last Name:</label>
          <input type="text" name="lName" id="lName" required />
        </div>
        <div className="fieldContainer">
          <label for="fName">Email:</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="fieldContainer">
          <label for="fName">Phone Number:</label>
          <input type="tel" name="phone" id="phone" />
        </div>
      </fieldset>
      <div className="formButtonsContainer">
        <input type="submit" className="primaryButton" />
      </div>
    </form>
  );
}

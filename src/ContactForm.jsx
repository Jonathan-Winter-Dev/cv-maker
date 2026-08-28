export default function ContactForm({ handleSubmit }) {
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

export default function ContactCv({ contact }) {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>
        {contact.fName} {contact.lName}
      </p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </div>
  );
}

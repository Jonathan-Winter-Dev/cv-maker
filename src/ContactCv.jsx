export default function ContactCv({ contact }) {
  return (
    <div className="contact">
      <h1>
        {contact.fName} {contact.lName}
      </h1>
      <div className="contactDetails">
        <p>{contact.email.length ? `Email: ${contact.email}` : ``}</p>
        <p>{contact.phone.length ? `Phone Number: ${contact.phone}` : ``}</p>
      </div>
    </div>
  );
}

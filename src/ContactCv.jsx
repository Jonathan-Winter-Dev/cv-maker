export default function ContactCv({ contact }) {
  return (
    <div className="contact">
      <h1>
        {contact.fName} {contact.lName}
      </h1>
      <div className="contactDetails">
        <b>
          <p>{contact.email.length ? `Email: ${contact.email}` : ``}</p>
        </b>
        <b>
          <p>{contact.phone.length ? `Phone Number: ${contact.phone}` : ``}</p>
        </b>
      </div>
    </div>
  );
}

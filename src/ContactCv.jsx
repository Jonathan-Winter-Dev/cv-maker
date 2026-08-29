export default function ContactCv({ contact }) {
  return (
    <div className="contact">
      <p>
        {contact.fName} {contact.lName}
      </p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
    </div>
  );
}

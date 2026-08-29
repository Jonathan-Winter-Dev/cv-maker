export default function ProfileForm({ updateProfile }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);
    updateProfile(dataObject.profileText);
  }

  return (
    <form onSubmit={handleSubmit} id="contactForm">
      <label for="profileText">Profile:</label>
      <textarea id="profileText" name="profileText" rows="5" />
      <input type="submit" />
    </form>
  );
}

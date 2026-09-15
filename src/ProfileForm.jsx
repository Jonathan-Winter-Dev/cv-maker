export default function ProfileForm({ updateProfile }) {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const dataObject = Object.fromEntries(formData);
    updateProfile(dataObject.profileText);
  }

  return (
    <form onSubmit={handleSubmit} id="profileForm">
      <h2>Profile</h2>
      <fieldset>
        <div className="fieldContainer">
          <label for="profileText">Profile Text:</label>
          <textarea id="profileText" name="profileText" rows="5" />
        </div>
      </fieldset>
      <input type="submit" />
    </form>
  );
}

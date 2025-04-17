const Volunteer = () => (
    <section>
      <h2>Volunteer with Us 💖</h2>
      <p>Want to help out? We’re always looking for students and kind hearts to:</p>
      <ul>
        <li>Post wishes on behalf of homes</li>
        <li>Deliver donated items</li>
        <li>Spread the word</li>
      </ul>
      <form>
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Email:
          <input type="email" required />
        </label>
        <label>
          How would you like to help?
          <textarea rows="3"></textarea>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </section>
  );
  
  export default Volunteer;
  
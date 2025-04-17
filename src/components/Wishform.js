import { useState } from 'react';

const WishForm = () => {
  const [wish, setWish] = useState({
    name: '',
    category: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setWish({ ...wish, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New wish submitted:", wish);
    setSubmitted(true);
    // Reset form (optional):
    setWish({ name: '', category: '', description: '' });
  };

  return (
    <div>
      {submitted ? (
        <div className="container">
          <h3>✅ Thank you! Your wish has been submitted.</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="container">
          <label>
            Name of Orphanage / Home:
            <input
              type="text"
              name="name"
              value={wish.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Category (e.g., Books, Food, Clothes):
            <input
              type="text"
              name="category"
              value={wish.category}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Description:
            <textarea
              name="description"
              value={wish.description}
              onChange={handleChange}
              required
            ></textarea>
          </label>

          <button type="submit">Submit Wish</button>
        </form>
      )}
    </div>
  );
};

export default WishForm;

import { Link } from 'react-router-dom';

const Home = () => (
  <section className="container">
    <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
      Welcome to <span style={{ color: '#4CAF50' }}>WishBridge</span> 🌉
    </h1>

    <p className="lead" style={{ textAlign: 'center', fontSize: '1.25rem', maxWidth: '600px', margin: '1.5rem auto' }}>
      Connecting kind donors with real needs from orphanages and old age homes.
    </p>

    <p style={{ textAlign: 'center' }}>
      <strong>Click</strong> <Link to="/wishes">"View Wishes"</Link> to see current requests<br />
      or <Link to="/post">"Post a Wish"</Link> to add one!
    </p>

    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <Link to="/wishes" className="contrast" role="button">View Wishes</Link>
      <Link to="/post" role="button" style={{ marginLeft: '1rem' }}>Post a Wish</Link>
    </div>
  </section>
);

export default Home;

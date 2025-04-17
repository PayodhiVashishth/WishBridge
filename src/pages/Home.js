const Home = () => (
    <section className="container">
      <h1 style={{ textAlign: 'center', marginTop: '2rem' }}>
        Welcome to <span style={{ color: '#4CAF50' }}>WishBridge</span> 🌉
      </h1>
  
      <p className="lead" style={{ textAlign: 'center', fontSize: '1.25rem', maxWidth: '600px', margin: '1.5rem auto' }}>
        Connecting kind donors with real needs from orphanages and old age homes.
      </p>
  
      <p style={{ textAlign: 'center' }}>
        <strong>Click</strong> <a href="/wishes">"View Wishes"</a> to see current requests<br />
        or <a href="/post">"Post a Wish"</a> to add one!
      </p>
  
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a href="/wishes" className="contrast" role="button">View Wishes</a>
        <a href="/post" role="button" style={{ marginLeft: '1rem' }}>Post a Wish</a>
      </div>
    </section>
  );
  
  export default Home;
  
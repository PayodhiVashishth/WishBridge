import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="container-fluid">
    <ul>
      <li><strong>WishBridge</strong></li>
    </ul>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/wishes">View Wishes</Link></li>
      <li><Link to="/post">Post a Wish</Link></li>
      <li><Link to="/volunteer">Volunteer</Link></li>
    </ul>
  </nav>
);

export default Navbar;

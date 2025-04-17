import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ViewWishes from './pages/ViewWishes';
import PostWish from './pages/PostWish';
import Volunteer from './pages/Volunteer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishes" element={<ViewWishes />} />
          <Route path="/post" element={<PostWish />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

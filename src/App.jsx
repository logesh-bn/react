import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Name from './Name';
import About from './About';
import Placement from './Placement';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
        <Link to="/">Name</Link>
        <Link to="/about">About</Link>
        <Link to="/placement">Placement</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Name />} />
        <Route path="/about" element={<About />} />
        <Route path="/placement" element={<Placement />} />
      </Routes>
    </Router>
  );
}

export default App;
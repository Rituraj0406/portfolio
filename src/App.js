import './App.css';
import './index.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Portfolio from './pages/Portfolio';
import Projects from './pages/Projects';

function App() {
  const location = useLocation();
  const isProjectsPage = location.pathname === '/projects';

  return (
    <div className="App">
      <Navbar isProjectsPage={isProjectsPage} />
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;

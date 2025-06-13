// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
const [darkMode, setDarkMode] = useState(() => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode !== null) return JSON.parse(savedMode);
  // Default to dark mode
  return true;
});

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Apply dark mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-background text-text">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className=" mainn flex-1 md:ml-64 transition-all duration-300">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;
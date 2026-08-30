import { useLocation, Link } from 'react-router-dom';
import { FiSun, FiMoon, FiHome, FiUser, FiFileText, FiCode, FiMail } from 'react-icons/fi';

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <FiHome /> },
    { path: '/about', label: 'About', icon: <FiUser /> },
    { path: '/resume', label: 'Resume', icon: <FiFileText /> },
    { path: '/projects', label: 'Projects', icon: <FiCode /> },
    { path: '/contact', label: 'Contact', icon: <FiMail /> },
  ];

  return (
    <nav className="nav-shell">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          <span className="nav-brand-mark">T</span>
          Touaibi
        </Link>

        <div className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-link-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="nav-button"
          onClick={() => setDarkMode((prev) => !prev)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

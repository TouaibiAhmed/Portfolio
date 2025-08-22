// Navbar.jsx
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
    <nav className="fixed top-0 left-0 right-0 z-50  h-[70px] border-b border-gray-200 dark:border-gray-700 flex items-center px-8">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-gradient mr-8">
      </Link>

      {/* Nav Items */}
      <div className="navbar-items flex gap-6 flex-1">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`navbar-item flex items-center gap-2 ${
              location.pathname === item.path ? 'active' : ''
            }`}
          >
            <span className="navbar-text hidden sm:inline">{item.label}</span>
          </Link>
        ))}
      {/* Theme Toggle */}



      </div>

    
    </nav>
  );
};

export default Navbar;

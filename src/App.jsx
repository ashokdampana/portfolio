import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main className="container-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav-container">
      <div className="nav-inner">
        <Link to="/" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
          Ashok
        </Link>
        <div className="flex gap-1">
          <NavLink to="/" active={isActive('/')}>Home</NavLink>
          <NavLink to="/about" active={isActive('/about')}>About</NavLink>
          <NavLink to="/skills" active={isActive('/skills')}>Skills</NavLink>
          <NavLink to="/projects" active={isActive('/projects')}>Projects</NavLink>
          <NavLink to="/contact" active={isActive('/contact')}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, active }) {
  return (
    <Link
      to={to}
      className={`nav-link ${active ? 'nav-link-active' : ''}`}
    >
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="grid-3">
          <div>
            <h3 className="font-bold text-neutral-900 dark:text-white mb-2">Ashok Kumar</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              MERN Stack Developer
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Home</Link>
              <Link to="/about" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">About</Link>
              <Link to="/projects" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400">Projects</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/ashokdampana" className="social-button" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.914-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.192 20 14.435 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/ashok-kumar-d-12b80339a" className="social-button" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.932-1.38 1.892v4.078H8.368V9.892h2.519v1.028h.035c.348-.66 1.203-1.345 2.475-1.345 2.651 0 3.14 1.745 3.14 4.018v4.744zM7.447 8.52c-.672 0-1.339-.535-1.339-1.208s.667-1.207 1.339-1.207c.672 0 1.339.535 1.339 1.207s-.667 1.208-1.339 1.208zm5.891 9.819H6.368V9.892h6.97v8.447zM17.467 3.447c0 .621-.504 1.125-1.125 1.125s-1.125-.504-1.125-1.125.504-1.125 1.125-1.125 1.125.504 1.125 1.125z" />
                </svg>
              </a>
              <a href="mailto:ashokdampana@gmail.com" className="social-button" aria-label="Email">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-neutral-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Ashok Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;

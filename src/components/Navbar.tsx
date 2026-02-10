import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        setIsOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(targetId);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
                    Aryakumar<span className="dot">.</span>
                </Link>

                <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#footer" className="nav-link" onClick={(e) => handleNavClick(e, 'footer')}>Contact</a>
                    </li>
                    <li className="nav-item theme-toggle-item">
                        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                            {theme === 'dark' ? '☀️' : '🌙'}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

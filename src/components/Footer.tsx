import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <h3>Aryakumar Mishra</h3>
                <p>Let's build something amazing together.</p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/aryakumar-mishra-747a39256/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/AryakumarMishra" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:aryakumar.ajaymishra@gmail.com">Email</a>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Aryakumar Mishra. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

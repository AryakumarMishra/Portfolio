import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="px-8 md:px-16 max-w-7xl mx-auto">
                {children}
            </main>
            <footer className="py-8 text-center text-gray-600 text-sm">
                © {new Date().getFullYear()} Aryakumar Mishra. Built with React.
            </footer>
        </div>
    );
};

export default Layout;

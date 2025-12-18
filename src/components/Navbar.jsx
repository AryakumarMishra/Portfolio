import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from './SmoothScroll';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

// 1. Define a shared spring transition so parent & children move in perfect sync
const SPRING = {
    type: "spring",
    stiffness: 200,
    damping: 20,
    mass: 0.8
};

const Navbar = () => {
    const lenis = useSmoothScroll();
    const { isDark, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            if (window.scrollY <= 50) setIsMobileMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (e, targetId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        if (lenis) {
            const target = document.querySelector(targetId);
            if (target) {
                lenis.scrollTo(target);
            }
        }
    };

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center pointer-events-none px-4 gap-2">
            <motion.nav
                layout
                style={{
                    width: isScrolled ? "100%" : "fit-content",
                    maxWidth: isScrolled ? "80rem" : "600px",
                    padding: isScrolled ? "12px 24px" : "10px 24px",
                }}
                animate={{
                    borderRadius: isScrolled ? 16 : 9999,
                    backgroundColor: isDark
                        ? (isScrolled ? "rgba(3, 0, 20, 0.8)" : "rgba(3, 0, 20, 0.5)")
                        : (isScrolled ? "rgba(255, 255, 255, 0.85)" : "rgba(255, 255, 255, 0.7)"),
                    borderColor: isDark
                        ? (isScrolled ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.1)")
                        : "rgba(255, 255, 255, 0.3)"
                }}
                transition={SPRING}
                className="pointer-events-auto flex items-center justify-between backdrop-blur-xl border shadow-lg overflow-hidden relative z-50"
            >
                {/* Name Container */}
                <AnimatePresence mode="popLayout">
                    {isScrolled && (
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 200 }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={SPRING}
                            className="flex-shrink-0 mr-auto overflow-hidden"
                        >
                            <a
                                href="#home"
                                onClick={(e) => handleScrollTo(e, '#home')}
                                className={`block text-lg font-bold tracking-tighter whitespace-nowrap pr-8 ${isDark ? 'text-white' : 'text-gray-900'}`}
                            >
                                Aryakumar Mishra
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Right Side Container */}
                <motion.div layout className="flex items-center gap-4 flex-shrink-0">

                    {/* Desktop Links (Hidden on Mobile SCROLLED) */}
                    <div className={`flex gap-6 ${isScrolled ? 'hidden md:flex' : 'flex'}`}>
                        <AnimatePresence mode="popLayout">
                            {isScrolled && (
                                <motion.a
                                    layout
                                    key="home-link"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={SPRING}
                                    href="#home"
                                    onClick={(e) => handleScrollTo(e, '#home')}
                                    className={`text-sm font-medium transition-colors hover:opacity-100 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                                >
                                    Home
                                </motion.a>
                            )}
                        </AnimatePresence>

                        {navLinks.map((link) => (
                            <motion.a
                                layout
                                transition={SPRING}
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className={`text-sm font-medium transition-colors hover:opacity-100 whitespace-nowrap ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Hamburger (Visible only on Mobile SCROLLED) */}
                    {isScrolled && (
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`md:hidden p-1 rounded-full transition-colors ${isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-black'}`}
                        >
                            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    )}

                    <div className={`w-[1px] h-4 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-black'}`}
                    >
                        {isDark ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                </motion.div>
            </motion.nav>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && isScrolled && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        className={`pointer-events-auto md:hidden w-full max-w-sm rounded-2xl border p-4 shadow-xl backdrop-blur-xl flex flex-col gap-2 
                        ${isDark
                                ? "bg-[#030014]/90 border-white/10"
                                : "bg-white/90 border-white/20"}`}
                    >
                        <a
                            href="#home"
                            onClick={(e) => handleScrollTo(e, '#home')}
                            className={`p-3 rounded-xl text-center text-sm font-medium transition-colors ${isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-gray-900'}`}
                        >
                            Home
                        </a>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className={`p-3 rounded-xl text-center text-sm font-medium transition-colors ${isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-black/5 text-gray-900'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;

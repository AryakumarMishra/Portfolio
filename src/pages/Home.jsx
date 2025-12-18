import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import NeuralBackground from '../components/NeuralBackground';

const Home = () => {
    const { isDark } = useTheme();
    const name = "Aryakumar Mishra";

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5,
            }
        }
    };

    const letter = {
        hidden: { y: 100, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 70
            }
        }
    };

    return (
        <section id="home" className="relative flex flex-col justify-center items-center min-h-screen pt-16 text-center overflow-hidden">
            {/* Unique Interactive Background */}
            <NeuralBackground />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="mb-8"
            >
                <div className="overflow-hidden">
                    {name.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letter}
                            className={`inline-block text-4xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-black'}`}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 1 }}
                className={`text-lg tracking-widest uppercase mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
            >
                Exploring the Future of AI Technology
            </motion.p>

            <motion.a
                href="#projects"
                onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.8 }}
                className={`group relative px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2 ${isDark
                    ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    : 'bg-black/5 text-gray-900 border border-black/10 hover:bg-black/10'
                    }`}
            >
                View Projects
                <ArrowDown size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-1 group-hover:translate-y-0" />
            </motion.a>

            <motion.a
                href="#projects"
                onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className={`absolute bottom-12 animate-bounce cursor-pointer transition-colors ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-black'}`}
            >
                <ArrowDown size={24} />
            </motion.a>
        </section>
    );
};

export default Home;

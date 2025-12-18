import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Background = () => {
    const { isDark } = useTheme();

    return (
        <div className={`fixed inset-0 z-[-1] overflow-hidden transition-colors duration-700 ${isDark ? 'bg-[#030014]' : 'bg-[#f8f9ff]'}`}>
            {/* Orb 1: Cyan/Teal */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: isDark ? [0.3, 0.5, 0.3] : [0.4, 0.6, 0.4],
                    x: [0, 50, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] transition-colors duration-700 will-change-transform ${isDark ? 'bg-cyan-500/20' : 'bg-cyan-200/50'}`}
            />

            {/* Orb 2: Purple/Magenta */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: isDark ? [0.3, 0.5, 0.3] : [0.4, 0.6, 0.4],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
                className={`absolute top-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] transition-colors duration-700 will-change-transform ${isDark ? 'bg-fuchsia-600/20' : 'bg-fuchsia-200/50'}`}
            />

            {/* Orb 3: Orange/Pink (Center accent) */}
            <motion.div
                animate={{
                    x: [-30, 30, -30],
                    y: [-20, 20, -20],
                    rotate: [0, 180, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full blur-[120px] transition-colors duration-700 opacity-30 will-change-transform ${isDark ? 'bg-indigo-500/30' : 'bg-indigo-300/40'}`}
            />

            {/* Orb 4: Warm accent */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className={`absolute -bottom-[20%] right-[20%] w-[45vw] h-[45vw] rounded-full blur-[100px] transition-colors duration-700 opacity-20 will-change-transform ${isDark ? 'bg-orange-500/20' : 'bg-orange-200/50'}`}
            />
        </div>
    );
};

export default Background;

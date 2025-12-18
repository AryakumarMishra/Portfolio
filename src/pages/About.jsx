import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const skills = ['Python', 'PyTorch', 'TensorFlow', 'OpenCV', 'NLP', 'GenAI', 'Scikit-learn', 'Docker'];

const ScrambleText = ({ text, isDark }) => {
    const [display, setDisplay] = useState(text);
    const chars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    const scramble = () => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    };

    return (
        <motion.div
            onHoverStart={scramble}
            className={`border p-4 rounded-lg text-center transition-colors cursor-pointer font-mono text-sm ${isDark
                ? 'border-white/10 bg-white/5 hover:bg-white/10 text-white'
                : 'border-black/5 bg-white/50 hover:bg-white/80 text-black shadow-sm'
                }`}
        >
            {display}
        </motion.div>
    );
};

const About = () => {
    const { isDark } = useTheme();
    return (
        <section id="about" className="py-24 min-h-[80vh] flex flex-col justify-center items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full text-center"
            >
                <h2 className={`text-4xl md:text-6xl font-bold mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>Who am I?</h2>

                <div className={`text-xl md:text-2xl leading-relaxed mb-16 space-y-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p>
                        I'm an <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>AI Enthusiast</span> and a <span className={`font-medium ${isDark ? 'text-white' : 'text-black'}`}>Student</span>.
                    </p>
                    <p>
                        I’m passionate about building practical deep learning and GenAI solutions. My current work focuses on multimodal deepfake detection and retrieval-augmented generation systems. I love transforming research ideas into deployable products using PyTorch, LangChain, and FastAPI.
                    </p>
                </div>

                <div className="w-full">
                    <h3 className={`text-lg uppercase tracking-widest mb-8 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Technologies</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {skills.map((tech) => (
                            <ScrambleText key={tech} text={tech} isDark={isDark} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;

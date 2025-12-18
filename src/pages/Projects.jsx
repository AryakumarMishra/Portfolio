import { motion, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Info } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';

const projects = [
    {
        title: 'Multi-Modal RAG System',
        category: 'AI & Machine Learning',
        description: 'A Multi-Modal RAG System that can answer questions based on a combination of PDFs/Text, Images, and Audios.',
        tags: ['Python', 'Retrieval Augmented Generation', 'Natural Language Processing'],
        links: { demo: '#', github: 'https://github.com/AryakumarMishra/Multimodal-RAG-Chatbot' },
        colors: {
            dark: 'from-blue-500/20 to-purple-500/20 border-blue-500/20',
            light: 'from-blue-100 to-purple-100 border-blue-200'
        }
    },
    {
        title: 'Multi-Modal Deepfake Detection',
        category: 'AI & Machine Learning',
        description: 'A Multi-Modal Deepfake Detection system that can detect deepfakes in Images, Videos, as well as Audios.',
        tags: ['Python', 'PyTorch', 'Computer Vision', 'Audio Processing'],
        links: { demo: 'https://multimodal-deepfake-detector.vercel.app/', github: 'https://github.com/AryakumarMishra/Multimodal-Deepfake-Detector' },
        colors: {
            dark: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/20',
            light: 'from-emerald-100 to-teal-100 border-emerald-200'
        }
    },
    {
        title: 'AI Fraud Detection',
        category: 'AI & Machine Learning',
        description: 'A Machine Learning model that can detect fraudulent credit card transactions.',
        tags: ['Python', 'Machine Learning', 'XGBoost'],
        links: { demo: '#', github: 'https://github.com/AryakumarMishra/ai-fraud-detection' },
        colors: {
            dark: 'from-orange-500/20 to-red-500/20 border-orange-500/20',
            light: 'from-orange-100 to-red-100 border-orange-200'
        }
    },
    {
        title: 'AI Based Machine Failure Detection',
        category: 'AI & Machine Learning',
        description: 'A machine learning project to predict industrial machine failures based on sensor data such as temperature, rotational speed, torque, and tool wear. This system aims to enable proactive maintenance, reduce unplanned downtime, and improve operational efficiency.',
        tags: ['Python', 'Machine Learning', 'XGBoost'],
        links: { demo: '#', github: 'https://github.com/AryakumarMishra/Machine-Failure-Prediction' },
        colors: {
            dark: 'from-blue-500/20 to-purple-500/20 border-blue-500/20',
            light: 'from-blue-100 to-purple-100 border-blue-200'
        }
    }
];

const Toast = ({ message, onClose, isDark }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 backdrop-blur-md border ${isDark
                ? 'bg-[#030014]/90 border-white/10 text-white'
                : 'bg-white/90 border-black/5 text-gray-900'
                }`}
        >
            <Info size={18} className="text-blue-500" />
            <span className="text-sm font-medium">{message}</span>
        </motion.div>
    );
};

const Card = ({ project, index, onShowToast }) => {
    const { isDark } = useTheme();
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const handleDemoClick = (e) => {
        if (project.links.demo === '#') {
            e.preventDefault();
            onShowToast("Not yet hosted. Coming soon!");
        }
    };

    // Select the correct color string based on theme
    const themeColor = isDark ? project.colors.dark : project.colors.light;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.1
            }}
            viewport={{ once: true, margin: "-10%" }}
            onMouseMove={handleMouseMove}
            // Dynamic border and background styles
            className={`group relative w-full rounded-2xl border overflow-hidden mb-8 sticky transition-all duration-300
                ${isDark ? `bg-[#0a0a0a] ${themeColor.split(' ').pop()}` : `bg-white shadow-xl ${themeColor.split(' ').pop()}`}
            `}
            // Sticky stacking logic
            style={{
                top: `${120 + index * 40}px`
            }}
        >
            {/* Mouse Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'},
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* The Gradient Tint Layer */}
            <div className={`absolute inset-0 bg-gradient-to-br opacity-100 transition-colors duration-500 ${isDark ? '' : 'opacity-60'} ${themeColor.split(' border')[0]}`} />

            <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <span className={`text-xs tracking-widest uppercase mb-4 block font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {project.category}
                    </span>

                    <h3 className={`text-3xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                    </h3>

                    <p className={`mb-6 leading-relaxed max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className={`text-xs border px-3 py-1 rounded-full font-medium
                                    ${isDark
                                        ? 'border-white/10 text-gray-300 bg-white/5'
                                        : 'border-black/5 text-gray-600 bg-white/50 backdrop-blur-sm'
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-6">
                        <a
                            href={project.links.demo}
                            onClick={handleDemoClick}
                            target={project.links.demo === '#' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 transition-colors font-medium cursor-pointer ${isDark ? 'hover:text-white text-gray-400' : 'hover:text-black text-gray-600'}`}
                        >
                            <ExternalLink size={18} /> Live Demo
                        </a>
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 transition-colors font-medium ${isDark ? 'hover:text-white text-gray-400' : 'hover:text-black text-gray-600'}`}
                        >
                            <Github size={18} /> Source
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const Projects = () => {
    const { isDark } = useTheme();
    const [toastMessage, setToastMessage] = useState(null);

    return (
        <section id="projects" className="py-24 min-h-screen relative">
            <AnimatePresence>
                {toastMessage && (
                    <Toast
                        message={toastMessage}
                        isDark={isDark}
                        onClose={() => setToastMessage(null)}
                    />
                )}
            </AnimatePresence>

            {/* CHANGED: Use grid-cols-4 instead of 3 to give cards more width (25% text / 75% cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-[90rem] mx-auto px-4 md:px-8">

                {/* Sticky Title Column */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32">
                        {/* CHANGED: Reduced text size from text-7xl to text-5xl */}
                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                            Personal
                            <span className={`block ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Projects</span>
                        </h2>
                        <p className={`text-base max-w-[200px] leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            A collection of projects exploring the boundaries of design and technology.
                        </p>
                    </div>
                </div>

                {/* Cards Column */}
                {/* CHANGED: Span 3 columns instead of 2 */}
                <div className="lg:col-span-3">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            project={project}
                            index={index}
                            onShowToast={setToastMessage}
                        />
                    ))}
                    <div className="h-[20vh]" />
                </div>
            </div>
        </section>
    );
};

export default Projects;

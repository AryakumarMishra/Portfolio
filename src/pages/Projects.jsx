import { motion, useMotionTemplate, useMotionValue, AnimatePresence, useSpring, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Github, Info } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect, useRef } from 'react';

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

// Updated Card to accept scrollYProgress for Center Focus Logic
const Card = ({ project, index, onShowToast, scrollYProgress }) => {
    const { isDark } = useTheme();

    // Calculate trigger points for this specific card
    // The gallery moves horizontally based on vertical scroll.
    // We adjust these "peaks" to perfectly time the pop-up effect.
    // 0.0 = Title Section
    // 0.2 = First Card
    // ... increments of ~0.20
    const peak = 0.20 + (index * 0.20);
    const range = [peak - 0.15, peak, peak + 0.15];

    // Dynamic styles based on scroll position
    const cardScale = useTransform(scrollYProgress, range, [0.9, 1.1, 0.9]);
    const cardOpacity = useTransform(scrollYProgress, range, [0.5, 1, 0.5]);
    const zIndex = useTransform(scrollYProgress, range, [1, 10, 1]); // Bring active card to front

    // 3D Motion Values (Mouse interaction still active!)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth springs for rotation
    const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        const relativeX = clientX - left;
        const relativeY = clientY - top;

        x.set(relativeX);
        y.set(relativeY);

        const offsetY = relativeY - height / 2;
        const offsetX = relativeX - width / 2;

        const rX = (offsetY / 40) * -1;
        const rY = offsetX / 40;

        rotateX.set(rX);
        rotateY.set(rY);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
    }

    const handleDemoClick = (e) => {
        if (project.links.demo === '#') {
            e.preventDefault();
            onShowToast("Not yet hosted. Coming soon!");
        }
    };

    const themeColor = isDark ? project.colors.dark : project.colors.light;

    return (
        <motion.div
            style={{
                scale: cardScale,
                opacity: cardOpacity,
                zIndex: zIndex,
                // Retain 3D transforms
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                transformPerspective: 1000,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`group relative h-[60vh] w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 rounded-3xl border overflow-hidden transition-colors duration-300
                ${isDark ? `bg-[#0a0a0a] ${themeColor.split(' ').pop()}` : `bg-white shadow-2xl ${themeColor.split(' ').pop()}`}
            `}
        >
            {/* Mouse Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            800px circle at ${x}px ${y}px,
                            ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'},
                            transparent 80%
                        )
                    `,
                }}
            />

            <div className={`absolute inset-0 bg-gradient-to-br opacity-100 transition-colors duration-500 ${isDark ? '' : 'opacity-60'} ${themeColor.split(' border')[0]}`} />

            <div
                className="relative h-full p-8 md:p-12 flex flex-col justify-between"
                style={{ transform: "translateZ(30px)" }}
            >
                <div>
                    <span className={`text-xs tracking-widest uppercase mb-4 block font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {project.category}
                    </span>
                    <h3 className={`text-3xl md:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {project.title}
                    </h3>
                    <p className={`text-lg leading-relaxed max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {project.description}
                    </p>
                </div>

                <div>
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
                            <ExternalLink size={20} /> Live Demo
                        </a>
                        <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 transition-colors font-medium ${isDark ? 'hover:text-white text-gray-400' : 'hover:text-black text-gray-600'}`}
                        >
                            <Github size={20} /> Source
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
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });

    // Horizontal Scroll Transformation
    // Moves from 0% to -X% where X depends on number of cards. 
    // We have 4 cards + Title section.
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        // Height 300vh allows enough space to scroll through the horizontal content
        <section ref={targetRef} id="projects" className="relative h-[300vh]">
            <AnimatePresence>
                {toastMessage && (
                    <Toast
                        message={toastMessage}
                        isDark={isDark}
                        onClose={() => setToastMessage(null)}
                    />
                )}
            </AnimatePresence>

            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24 items-center">

                    {/* Title Slide */}
                    <div className="w-[80vw] md:w-[40vw] flex flex-col justify-center flex-shrink-0">
                        <h2 className={`text-6xl md:text-8xl font-bold mb-8 leading-tight ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>
                            Personal
                            <span className={`block ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Projects</span>
                        </h2>
                        <p className={`text-xl max-w-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            A curated collection of projects exploring the boundaries of AI, Design, and Engineering.
                            <br /><br />
                            <span className="text-sm opacity-50 flex items-center gap-2">SCROLL TO EXPLORE &rarr;</span>
                        </p>
                    </div>

                    {/* Project Cards with Scroll-Aware Pop Logic */}
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            project={project}
                            index={index}
                            onShowToast={setToastMessage}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}

                    {/* Padding at end */}
                    <div className="w-[10vw] flex-shrink-0" />
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

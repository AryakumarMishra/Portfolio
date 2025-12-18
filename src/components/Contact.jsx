import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Linkedin, Github, Mail } from 'lucide-react';

const Contact = () => {
    const { isDark } = useTheme();

    return (
        <section id="contact" className="py-24 flex flex-col items-center justify-center text-center">
            <h2 className={`text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h2>
            <p className={`max-w-md mb-12 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm always open to discussing new projects, creative ideas or potential collaborations.
            </p>

            <div className="flex gap-8">
                <a
                    href="https://www.linkedin.com/in/aryakumar-mishra-747a39256/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full border transition-all hover:scale-110 ${isDark
                        ? 'border-white/10 text-white hover:bg-white hover:text-black'
                        : 'border-black/10 text-black hover:bg-black hover:text-white'
                        }`}
                >
                    <Linkedin size={24} />
                </a>
                <a
                    href="https://github.com/AryakumarMishra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-full border transition-all hover:scale-110 ${isDark
                        ? 'border-white/10 text-white hover:bg-white hover:text-black'
                        : 'border-black/10 text-black hover:bg-black hover:text-white'
                        }`}
                >
                    <Github size={24} />
                </a>
                <a
                    href="mailto:aryakumar.ajaymishra@gmail.com"
                    className={`p-4 rounded-full border transition-all hover:scale-110 ${isDark
                        ? 'border-white/10 text-white hover:bg-white hover:text-black'
                        : 'border-black/10 text-black hover:bg-black hover:text-white'
                        }`}
                >
                    <Mail size={24} />
                </a>
            </div>
        </section>
    );
};

export default Contact;

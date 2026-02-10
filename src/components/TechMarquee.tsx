import React from 'react';
import '../styles/TechMarquee.css';

const techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'OpenCV', icon: '👁️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '🐙' },
    { name: 'Docker', icon: '🐳' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
];

const TechMarquee: React.FC = () => {
    return (
        <div className="tech-marquee-container">
            <h3 className="marquee-title">Technologies</h3>
            <div className="marquee">
                <div className="marquee-content">
                    {techStack.map((tech, index) => (
                        <div key={index} className="tech-item">
                            <span className="tech-icon">{tech.icon}</span>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {techStack.map((tech, index) => (
                        <div key={`dup-${index}`} className="tech-item">
                            <span className="tech-icon">{tech.icon}</span>
                            <span className="tech-name">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechMarquee;

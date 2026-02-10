import React from 'react';
import '../styles/About.css';

const techStack = [
    { name: 'Python', icon: '🐍' },
    { name: 'TensorFlow', icon: '🧠' },
    { name: 'PyTorch', icon: '🔥' },
    { name: 'OpenCV', icon: '👁️' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '🐙' },
];

const About: React.FC = () => {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a final year Computer Engineering student with a deep passion for
                            <span className="highlight-text"> Artificial Intelligence and Machine Learning</span>.
                        </p>
                        <p>
                            My journey involves exploring the depths of Artificial Intelligence and Machine Learning, especially in the field of Natural Language Processing.
                            I love building practical projects that add meaning to the real world.
                        </p>
                        <p>
                            Currently looking for opportunities to contribute to cutting-edge AI products.
                        </p>
                    </div>
                    <div className="tech-stack">
                        <h3>Tech Stack</h3>
                        <div className="stack-grid">
                            {techStack.map((tech) => (
                                <div key={tech.name} className="stack-item">
                                    <span className="stack-icon">{tech.icon}</span>
                                    <span className="stack-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

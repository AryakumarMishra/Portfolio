import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';

const MagnifiedText: React.FC<{ text: string }> = ({ text }) => {
    const containerRef = useRef<HTMLHeadingElement>(null);
    const charRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            charRefs.current.forEach((span) => {
                if (!span) return;

                const rect = span.getBoundingClientRect();
                const charCenterX = rect.left + rect.width / 2;
                const charCenterY = rect.top + rect.height / 2;

                const dist = Math.hypot(e.clientX - charCenterX, e.clientY - charCenterY);

                const maxDistance = 200; // Interaction radius
                const maxScale = 1.5; // Max zoom

                if (dist < maxDistance) {
                    const effect = (maxDistance - dist) / maxDistance;
                    // Easing for smooth wave
                    const scale = 1 + (maxScale - 1) * Math.pow(effect, 3);
                    span.style.transform = `scale(${scale})`;
                    span.style.color = 'var(--primary-color)'; // Optional: color shift
                } else {
                    span.style.transform = 'scale(1)';
                    span.style.color = 'inherit';
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <h1
            className="hero-title interactive-title"
            ref={containerRef}
            style={{ display: 'flex', justifyContent: 'center', gap: '3px', flexWrap: 'wrap' }}
        >
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    ref={(el) => { charRefs.current[index] = el }}
                    style={{
                        display: 'inline-block',
                        transition: 'transform 0.1s ease-out, color 0.2s ease',
                        cursor: 'default',
                        minWidth: char === ' ' ? '15px' : 'auto',
                        willChange: 'transform'
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </h1>
    );
};

const Hero: React.FC = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <MagnifiedText text="Aryakumar Mishra" />
                <h2 className="hero-subtitle">
                    Building <span className="gradient-text">Intelligent</span> Systems
                </h2>
                <div className="hero-actions">
                    <a href="projects" className="btn btn-primary">View Projects</a>
                </div>
            </div>
            <div className="hero-visuals">
                <div className="glowing-orb"></div>
            </div>
        </section>
    );
};

export default Hero;

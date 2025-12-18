import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const NeuralBackground = () => {
    const canvasRef = useRef(null);
    const { isDark } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let animationFrameId; // To stop animation on cleanup

        // Configuration
        const PARTICLE_COUNT = 60;
        const CONNECTION_DISTANCE = 150;
        const MOUSE_DISTANCE = 200;

        // Mouse tracking
        const mouse = { x: null, y: null };

        // Handle Window Resize
        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        // Particle Class
        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Velocity X
                this.vy = (Math.random() - 0.5) * 0.5; // Velocity Y
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse Interaction
                if (mouse.x != null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < MOUSE_DISTANCE) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (MOUSE_DISTANCE - distance) / MOUSE_DISTANCE;

                        // Gentle attraction
                        this.vx += forceDirectionX * force * 0.05;
                        this.vy += forceDirectionY * force * 0.05;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
                ctx.fill();
            }
        }

        // Initialize Particles
        const init = () => {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particles.push(new Particle());
            }
        };

        // Animation Loop
        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < CONNECTION_DISTANCE) {
                        ctx.beginPath();
                        ctx.strokeStyle = isDark
                            ? `rgba(255, 255, 255, ${1 - distance / CONNECTION_DISTANCE})`
                            : `rgba(0, 0, 0, ${1 - distance / CONNECTION_DISTANCE})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }

                // Draw Mouse Connections
                if (mouse.x != null) {
                    const dx = mouse.x - particles[i].x;
                    const dy = mouse.y - particles[i].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < MOUSE_DISTANCE) {
                        ctx.beginPath();
                        ctx.strokeStyle = isDark
                            ? `rgba(56, 189, 248, ${1 - distance / MOUSE_DISTANCE})` // Cyan in dark mode
                            : `rgba(79, 70, 229, ${1 - distance / MOUSE_DISTANCE})`; // Indigo in light mode
                        ctx.lineWidth = 1;
                        ctx.moveTo(mouse.x, mouse.y);
                        ctx.lineTo(particles[i].x, particles[i].y);
                        ctx.stroke();
                    }
                }

                particles[i].update();
                particles[i].draw();
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        // Event Listeners
        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        // Start
        resize();
        init();
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDark]); // Re-run if theme changes to update color logic

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-40"
        />
    );
};

export default NeuralBackground;

import React, { useEffect, createContext, useContext, useState } from 'react';
import Lenis from 'lenis';

const SmoothScrollContext = createContext();

export const useSmoothScroll = () => useContext(SmoothScrollContext);

const SmoothScroll = ({ children }) => {
    const [lenis, setLenis] = useState(null);

    useEffect(() => {
        const lenisInstance = new Lenis({
            duration: 2.0, // Increased for smoother inertia
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1.0,
            smoothTouch: true, // Enable smooth scroll for touch devices
            touchMultiplier: 2.0,
        });

        setLenis(lenisInstance);

        function raf(time) {
            lenisInstance.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
        };
    }, []);

    return (
        <SmoothScrollContext.Provider value={lenis}>
            {children}
        </SmoothScrollContext.Provider>
    );
};

export default SmoothScroll;

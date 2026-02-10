import React, { useEffect, useState } from 'react';
import '../styles/Cursor.css';

const Cursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailing, setTrailing] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    useEffect(() => {
        const followCursor = () => {
            setTrailing((prev) => ({
                x: prev.x + (position.x - prev.x) * 0.1,
                y: prev.y + (position.y - prev.y) * 0.1,
            }));
        };

        const interval = setInterval(followCursor, 10);
        return () => clearInterval(interval);
    }, [position]);

    return (
        <>
            <div
                className="cursor-dot"
                style={{ left: position.x, top: position.y }}
            />
            <div
                className="cursor-outline"
                style={{ left: trailing.x, top: trailing.y }}
            />
        </>
    );
};

export default Cursor;

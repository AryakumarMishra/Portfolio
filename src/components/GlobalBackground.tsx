import React from 'react';
import '../styles/GlobalBackground.css';

const GlobalBackground: React.FC = () => {
    return (
        <div className="global-background">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
            <div className="noise-overlay"></div>
            <div className="backdrop-blur"></div>
        </div>
    );
};

export default GlobalBackground;

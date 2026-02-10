import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
    return (
        <div className="page-padding">
            <About />
            <Footer />
        </div>
    );
};

export default AboutPage;

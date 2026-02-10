import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import TechMarquee from '../components/TechMarquee';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <ScrollReveal>
                <TechMarquee />
            </ScrollReveal>
            <ScrollReveal>
                <Projects limit={3} showTitle={true} title="Featured Projects" layout="stacked" />
            </ScrollReveal>
            <Footer />
        </>
    );
};

export default Home;

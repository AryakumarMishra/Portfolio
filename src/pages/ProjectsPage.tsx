import React from 'react';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const ProjectsPage: React.FC = () => {
    return (
        <div className="page-padding">
            <Projects showTitle={true} title="All Projects" layout="list" />
            <Footer />
        </div>
    );
};

export default ProjectsPage;

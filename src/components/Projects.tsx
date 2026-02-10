import React from 'react';
import '../styles/Projects.css';

const projects = [
    {
        title: 'Research Assistant',
        description: 'A RAG model helping with understanding Research Papers, and their content, findings, limitations, built with a purpose of assisting in research work in the field of Computer Science.',
        tags: ['Python', 'Retrieval Augmented Generation', 'Natural Language Processing'],
        githubLink: 'https://github.com/AryakumarMishra/CS-Research-Assistant',
        demoLink: '#',
    },
    {
        title: 'Multi-Modal RAG System',
        description: 'A Multi-Modal RAG System that can answer questions based on a combination of PDFs/Text, Images, and Audios.',
        tags: ['Python', 'Retrieval Augmented Generation', 'Natural Language Processing'],
        githubLink: 'https://github.com/AryakumarMishra/Multimodal-RAG-Chatbot',
        demoLink: 'https://multimodalapp.streamlit.app/',
    },
    {
        title: 'Multi-Modal Deepfake Detection',
        description: 'A Multi-Modal Deepfake Detection system that can detect deepfakes in Images, Videos, as well as Audios.',
        tags: ['Python', 'PyTorch', 'Computer Vision', 'Audio Processing'],
        githubLink: 'https://github.com/AryakumarMishra/Multimodal-Deepfake-Detector',
        demoLink: 'https://multimodal-deepfake-detector.vercel.app/',
    },
    {
        title: 'AI Fraud Detection',
        description: 'A Machine Learning model that can detect fraudulent credit card transactions.',
        tags: ['Python', 'Machine Learning', 'XGBoost'],
        githubLink: 'https://github.com/AryakumarMishra/ai-fraud-detection',
        demoLink: '#',
    },
    {
        title: 'AI Based Machine Failure Detection',
        description: 'A machine learning project to predict industrial machine failures based on sensor data such as temperature, rotational speed, torque, and tool wear. This system aims to enable proactive maintenance, reduce unplanned downtime, and improve operational efficiency.',
        tags: ['Python', 'Machine Learning', 'XGBoost'],
        githubLink: 'https://github.com/AryakumarMishra/Machine-Failure-Prediction',
        demoLink: '#',
    }
];

interface ProjectsProps {
    limit?: number;
    showTitle?: boolean;
    title?: string;
    layout?: 'stacked' | 'grid' | 'list';
}

const Projects: React.FC<ProjectsProps> = ({ limit, showTitle = true, title = "Featured Projects", layout = 'stacked' }) => {
    const displayedProjects = limit ? projects.slice(0, limit) : projects;
    const [selectedProject, setSelectedProject] = React.useState<typeof projects[0] | null>(null);

    return (
        <section className="projects" id="projects">
            <div className={`projects-container ${layout}`}>
                {showTitle && <h2 className="section-title">{title}</h2>}

                {/* List Layout (Projects Page) */}
                {layout === 'list' ? (
                    <div className="projects-list">
                        {displayedProjects.map((project, index) => (
                            <div
                                key={index}
                                className="project-list-item"
                                onClick={() => setSelectedProject(project)}
                            >
                                <span className="project-list-title">{project.title}</span>
                                <span className="project-list-arrow">→</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    /* Stacked/Grid Layout (Home Page) */
                    <div className={`projects-grid ${layout}`}>
                        {displayedProjects.map((project, index) => (
                            <div key={index} className="project-card" style={layout === 'stacked' ? { top: `calc(100px + ${index * 30}px)` } : {}}>
                                <div className="card-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        <a href={project.githubLink} className="project-link github-link" target="_blank" rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                        <a href={project.demoLink} className="project-link demo-link" target="_blank" rel="noopener noreferrer">
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Project Modal */}
                {selectedProject && (
                    <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
                        <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                            <button className="close-modal" onClick={() => setSelectedProject(null)}>×</button>
                            <h3 className="modal-title">{selectedProject.title}</h3>
                            <p className="modal-desc">{selectedProject.description}</p>
                            <div className="modal-tags">
                                {selectedProject.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <div className="modal-actions">
                                <a href={selectedProject.githubLink} className="btn btn-outline" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={selectedProject.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;

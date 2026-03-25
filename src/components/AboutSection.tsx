const skills = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn",
  "NLP", "Computer Vision", "Deep Learning", "Data Science",
  "JavaScript", "React", "SQL", "Git",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-2">01.</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-10">About Me</h3>

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a final semester B.Tech Computer Science student with a deep passion for
              Artificial Intelligence and Machine Learning. I love exploring how data-driven
              models can solve real-world problems — from natural language understanding to
              computer vision applications.
            </p>
            <p>
              Beyond ML, I enjoy building clean, functional web applications and experimenting
              with new technologies. I'm always eager to learn, collaborate, and work on
              projects that push boundaries.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-medium text-foreground mb-4">Technologies I work with</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-mono rounded-md bg-secondary text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

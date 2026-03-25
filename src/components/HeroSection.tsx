const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-mono text-primary mb-4 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Hello, I'm
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 animate-fade-in opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          Aryakumar Mishra
        </h1>
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 animate-fade-in opacity-0"
          style={{ animationDelay: "0.4s" }}
        >
          Final year B.Tech student in Computer Science, passionate about building intelligent systems with AI & Machine Learning.
        </p>
        <div className="flex items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
          <a
            href="#projects"
            className="px-6 py-3 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

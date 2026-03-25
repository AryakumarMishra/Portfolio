import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-sm font-mono text-primary mb-2">03.</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Get in Touch</h3>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          I'm currently open to opportunities — whether it's a full-time role, internship,
          research collaboration, or just a conversation about AI/ML. Feel free to reach out!
        </p>

        <a
          href="mailto:aryakumar@example.com"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
        >
          <Mail className="w-4 h-4" />
          Say Hello
        </a>

        <div className="flex items-center justify-center gap-6 mt-12">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:aryakumar@example.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

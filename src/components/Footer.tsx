import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sagar S. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="mailto:sagar.itsoftware@gmail.com"
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://github.com/sagar65s"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/sagar65s"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-all hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

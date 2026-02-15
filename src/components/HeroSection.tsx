import { motion } from "framer-motion";
import { ArrowDown, Mail, Download } from "lucide-react";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import Resume from "@/assets/SagarResume.pdf";

const roles = ["Python Developer", "Web Developer", "IT Student", "AI Engineer", "Cloud Engineer"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/15 blur-3xl"
          animate={{ x: [0, 60, -30, 40, 0], y: [0, 40, 80, 20, 0], scale: [1, 1.2, 0.9, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-20 w-[400px] h-[400px] rounded-full bg-accent/15 blur-3xl"
          animate={{ x: [0, -50, 30, -60, 0], y: [0, -60, 30, -20, 0], scale: [1, 0.85, 1.15, 1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl"
          animate={{ x: [0, 80, -40, 50, 0], y: [0, -30, 50, -60, 0], opacity: [0.4, 0.7, 0.3, 0.6, 0.4] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Animated Profile Photo */}
        <motion.div
          className="relative mx-auto mt-[50px] mb-8 w-36 h-36 md:w-44 md:h-44"
          initial={{ opacity: 0, scale: 0.5, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.08, y: -8, rotate: [0, -2, 2, 0] }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          {/* Rotating gradient ring */}
          <motion.div
            className="absolute -inset-2 rounded-full"
            style={{
              background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner dark ring */}
          <div className="absolute -inset-0.5 rounded-full bg-background" />
          {/* Photo */}
          <motion.img
            src={profilePhoto}
            alt="Sagar S - Developer"
            className="relative w-full h-full rounded-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          {/* Pulsing glow */}
          <motion.div
            className="absolute -inset-4 rounded-full opacity-30 blur-xl"
            style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.6), transparent 70%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.p
          className="text-sm md:text-base font-mono text-primary mb-4 tracking-widest uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-gradient">Sagar S</span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl lg:text-3xl font-mono text-muted-foreground mb-6 h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>{displayed}</span>
          <span className="border-r-2 border-primary ml-1 animate-blink">&nbsp;</span>
        </motion.div>

        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Information Technology student and aspiring full-stack developer with hands-on experience in building responsive, user-friendly web applications using modern development tools and technologies.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-glow hover:scale-105 transition-all flex items-center gap-2"
          >
            <ArrowDown size={18} />
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2"
          >
            <Mail size={18} />
            Contact Me
          </a>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-muted-foreground" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;

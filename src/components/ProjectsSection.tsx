import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import projectResume from "@/assets/resume-project.png";
import projectWaste from "@/assets/protfolio-photo.png";

const projects = [
  {
    title: "AI Resume Builder",
    description: "An AI-powered web application that generates professional resumes based on user input.",
    tech: ["HTML","React","twindland CSS", "Node.js", "AI API","postgreSQL"],
    links: { live: "#", github: "#" },
    image: projectResume,
  },
  {
    title: "Protfolio Website",
    description: "Responsive personal portfolio with modern UI and smooth animations to showcase projects and skills.",
    tech: ["HTML","React","twindland CSS","javaScript"],
    links: { live: "#", github: "#" },
    image: projectWaste,
  },
  // {
  //   title: "Smart Attendance System",
  //   description: "Face recognition-based attendance tracking system for classrooms using deep learning.",
  //   tech: ["Python", "OpenCV", "TensorFlow"],
  //   links: { github: "#" },
  //   image: projectResume,
  // },
  // {
  //   title: "E-Commerce Platform",
  //   description: "Full-stack online shopping platform with cart, payments, and admin dashboard.",
  //   tech: ["React", "Node.js", "MongoDB"],
  //   links: { live: "#", github: "#" },
  //   image: projectWaste,
  // },
  // {
  //   title: "Weather Dashboard",
  //   description: "Real-time weather forecasting app with interactive maps and location-based alerts.",
  //   tech: ["React", "OpenWeather API", "Chart.js"],
  //   links: { live: "#", github: "#" },
  //   image: projectResume,
  // },
  // {
  //   title: "Chat Application",
  //   description: "Real-time messaging app with group chats, file sharing, and end-to-end encryption.",
  //   tech: ["React", "Socket.io", "Firebase"],
  //   links: { live: "#", github: "#" },
  //   image: projectWaste,
  // },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  return (
    <ScrollReveal delay={index * 0.15}>
      <motion.div
        className="glass-card overflow-hidden group relative"
        whileHover={{ scale: 1.02, rotateY: 2, rotateX: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ perspective: 1000 }}
      >
        {/* Project image */}
        <div className="h-48 relative overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>

        <div className="p-6 relative">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((t) => (
              <motion.span
                key={t}
                className="text-xs font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.2)" }}
              >
                {t}
              </motion.span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.links.live && (
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                whileHover={{ x: 4 }}
              >
                <ExternalLink size={16} /> Live Demo
              </motion.a>
            )}
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              whileHover={{ x: 4 }}
            >
              <Github size={16} /> GitHub
            </motion.a>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

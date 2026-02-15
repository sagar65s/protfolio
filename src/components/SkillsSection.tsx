import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import { Code2, Globe, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    color: "primary",
    skills: [
      { name: "Python", level: 85 },
      { name: "Java", level: 40 },
      { name: "C", level: 90 },
    ],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    color: "accent",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 95 },
      { name: "JavaScript", level: 50 },
      { name: "React", level: 45 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    color: "primary",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Render", level: 80 },
    ],
  },
  {
    icon: Brain,
    title: "Other Skills",
    color: "accent",
    skills: [
      { name: "Problem Solving", level: 95 },
      { name: "Team Collaboration", level: 90 },
      { name: "UI/UX Basics", level: 50 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-3 last:mb-0">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-foreground font-medium">{name}</span>
        <motion.span
          className="text-muted-foreground font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2.5 rounded-full bg-secondary overflow-hidden relative">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary relative overflow-hidden"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, delay: delay + 1, repeatDelay: 3 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="glass-card p-6 h-full group relative overflow-hidden"
                  whileHover={{ scale: 1.01, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br from-${cat.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-5">
                      <motion.div
                        className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Icon className="text-primary" size={20} />
                      </motion.div>
                      <h3 className="text-lg font-semibold">{cat.title}</h3>
                    </div>
                    {cat.skills.map((skill, j) => (
                      <SkillBar key={skill.name} {...skill} delay={i * 0.1 + j * 0.12} />
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

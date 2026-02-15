import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { User, Code, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: User,
    title: "Who I Am",
    text: "I am an Information Technology student with a strong interest in web development and artificial intelligence. I enjoy building clean, responsive, and user-friendly websites.",
    gradient: "from-primary/10 to-primary/5",
  },
  {
    icon: Code,
    title: "What I Do",
    text: "I am a quick learner who loves exploring new technologies and solving real-world problems through coding. Currently focusing on improving my full-stack development skills.",
    gradient: "from-accent/10 to-accent/5",
  },
  {
    icon: Lightbulb,
    title: "My Goals",
    text: "Currently working on AI-based projects and focusing on becoming a proficient full-stack developer with expertise in modern web technologies.",
    gradient: "from-primary/10 to-accent/5",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.title} delay={0.1 + i * 0.1}>
                <motion.div
                  className="glass-card p-6 h-full overflow-hidden relative group"
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Animated gradient background on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="text-primary" size={24} />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{card.text}</p>
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

export default AboutSection;

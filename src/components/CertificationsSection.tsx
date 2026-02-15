import { Award, Briefcase, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import certPython from "@/assets/cert-python.jpg";
import certJava from "@/assets/cert-java.jpg";
import certC from "@/assets/cert-c.jpg";
import { useState } from "react";

// create a new certificate in the front 

const certifications = [
  { title: "Python Developer Certificate", issuer: "SoloLearn & Coursera", icon: Award, image: certPython },
  { title: "Java Programming", issuer: "SoloLearn", icon: Award, image: certJava },
  { title: "C Programming", issuer: "SoloLearn", icon: Award, image: certC },
  { title: "Python Developer Certificate", issuer: "SoloLearn & Coursera", icon: Award, image: certPython },
  { title: "Java Programming", issuer: "SoloLearn", icon: Award, image: certJava },
  { title: "C Programming", issuer: "SoloLearn", icon: Award, image: certC },
  { title: "Python Developer Certificate", issuer: "SoloLearn & Coursera", icon: Award, image: certPython },
  { title: "Java Programming", issuer: "SoloLearn", icon: Award, image: certJava },
  { title: "C Programming", issuer: "SoloLearn", icon: Award, image: certC },
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Certifications & <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        {/* Internship */}
        <ScrollReveal delay={0.1}>
          <motion.div
            className="glass-card p-6 mb-10 max-w-2xl mx-auto overflow-hidden relative group"
            whileHover={{ scale: 1.01, y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-start gap-4 relative z-10">
              <motion.div
                className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0"
                whileHover={{ rotate: 10 }}
              >
                <Briefcase className="text-accent" size={24} />
              </motion.div>
              <div>
                <h3 className="font-semibold text-lg">Web Development Intern</h3>
                <p className="text-primary text-sm font-mono">HexSoftware</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Worked on web development and real-world project tasks.
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Certifications with images */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <ScrollReveal key={cert.title} delay={0.2 + i * 0.15}>
                <motion.div
                  className="glass-card overflow-hidden group cursor-pointer relative"
                  whileHover={{ scale: 1.03, y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  onClick={() => setSelectedCert(selectedCert === i ? null : i)}
                >
                  {/* Certificate image */}
                  <div className="relative h-44 overflow-hidden">
                    <motion.img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <motion.div
                      className="absolute top-3 right-3 p-2 rounded-full bg-card/60 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink size={14} className="text-primary" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-5 text-center relative">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 -mt-8 relative z-10 border-2 border-card"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-primary" size={20} />
                    </motion.div>
                    <h4 className="font-semibold text-sm">{cert.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>

                  {/* Hover glow overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                    style={{ boxShadow: "inset 0 0 40px hsl(var(--primary) / 0.1)" }}
                  />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

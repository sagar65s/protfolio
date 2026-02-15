import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Building, Briefcase, Rocket, Subtitles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { sub } from "date-fns";

const milestones = [
  {
    icon: GraduationCap,
    title: "Secondary School Leaving Certificate (SSLC)",
    subtitle: "National Higher Secondary School Nagore ",
    description: "Completed secondary education with a strong foundation in science and mathematics.",
    cgpa:"75 percentage",
    period: "2020 - 2021",
  },
  {
    icon: GraduationCap,
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "National Higher Secondary School Nagore",
    description: "Completed higher secondary education with a focus on science and analytical skills.",
    cgpa:"62 percentage",
    period: "2021 - 2023",
  },
  {
    icon: GraduationCap,
    title: "B.Tech – Information Technology",
    subtitle: "Sir Issac Newton College of Engineering and Technology",
    description: "Pursuing B.Tech in IT with a focus on software development and practical project experience.",
    cgpa:"8.1 CGPA",
    period: "2023 - present",
  },
  {
    icon: Building,
    title: "HexSoftware",
    description: "Web Development Intern, contributed to building responsive enterprise web applications.",
    period: "Jan 15 – Feb 15, 2026",
  },
  //   {
  //   icon: Building,
  //   title: "Internship — Infosys",
  //   description: "Data Analytics Intern, worked on data visualization dashboards and predictive models.",
  //   period: "Internship 3",
  // },
  // {
  //   icon: Briefcase,
  //   title: "Internship — Cognizant",
  //   description: "Software Engineering Intern, developed microservices and RESTful APIs for client projects.",
  //   period: "Internship 4",
  // },
  // {
  //   icon: Briefcase,
  //   title: "Internship — Accenture",
  //   description: "Cloud & AI Intern, built cloud-native solutions and integrated AI/ML pipelines.",
  //   period: "Internship 5",
  // },
  {
    icon: Rocket,
    title: "AI Resume Builder",
    description: "Building AI-powered projects and continuously learning modern web technologies.",
    period: "Dec 2025 – Feb 2026",
  },
];

const TimelineSection = () => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section id="journey" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-16 rounded-full" />
        </ScrollReveal>

        <div className="relative" ref={lineRef}>
          {/* Animated line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ originY: 0 }}
          />

          {milestones.map((m, i) => {
            const Icon = m.icon;
            const isLeft = i % 2 === 0;

            return (
              <ScrollReveal
                key={i}
                delay={i * 0.15}
                direction={isLeft ? "left" : "right"}
                className="mb-12 last:mb-0"
              >
                <div
                  className={`flex items-start gap-4 md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-row`}
                >
                  <div
                    className={`flex-1 ${isLeft ? "md:text-right" : "md:text-left"
                      } hidden md:block`}
                  >
                    <div className={`glass-card p-5 hover-glow transition-all inline-block ${isLeft ? "ml-auto" : "mr-auto"}`}>
                      <span className="text-xs font-mono text-primary">{m.period}</span>
                      <h3 className="text-lg font-semibold mt-1">{m.title}</h3>
                      <h5 className="text-sm font-extrabold mt-1">{m.subtitle}</h5>
                      <p className="text-sm text-muted-foreground mt-2">{m.description}</p>
                      <h3 className="text-sm font-extrabold mt-1">{m.cgpa}</h3>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center z-10">
                    <Icon className="text-primary" size={20} />
                  </div>

                  {/* Mobile + right side content */}
                  <div className="flex-1 md:hidden">
                    <div className="glass-card p-5 hover-glow transition-all">
                      <span className="text-xs font-mono text-primary">{m.period}</span>
                      <h3 className="text-lg font-semibold mt-1">{m.title}</h3>
                      <h5 className="text-sm font-extrabold mt-1">{m.subtitle}</h5>
                      <p className="text-sm text-muted-foreground mt-2">{m.description}</p>
                      <h3 className="text-sm font-extrabold mt-1">{m.cgpa}</h3>
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

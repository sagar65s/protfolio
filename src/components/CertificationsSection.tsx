import { Award, Briefcase, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import IntroPython from "@/assets/introduction to python sololearns.png";
import DataDriven from "@/assets/In To Data Driven World.png";
import GenAIModel from "@/assets/GENERATIVE AI CERTIFICATE   NEXTWAY.png";
import PythonDeveloper from "@/assets/python developer sololearns.png";
import JavaBootcamp from "@/assets/java bootcamp letsupgrade.png";
import IntroJava from "@/assets/java sololearns.jpg";
import SoftSkill from "@/assets/SOFT SKILL  tcs.png";
import SocialMediaAttack from "@/assets/Social media attack novitech.png";
import AINovitech from "@/assets/AI 30days NoviTech.png";
import WebDevelopmentjustrise from "@/assets/web development justrise technology.png";
import FSDArttifai from "@/assets/Full Stack Developmentartifitech.png";
import FSDNovitech from "@/assets/full stack development Novitech.png";
import PythonInfosys from "@/assets/python infosys.png";
import Softwareintern from "@/assets/software intern hackerrank.png";
import SQLBootcamp from "@/assets/SQL bootcamp letupgrade.png";
import DataClean from "@/assets/dataclean sql letsupgrade.png";
import AIBuisness from "@/assets/ai for business hp life.png";
import DataScience from "@/assets/data science and analytics hp life.png";
import FigJam from "@/assets/Sagar Fig Jam certificate HCL GUVI.png";
import PythonHackerRank from "@/assets/python hackerrank.png";
import PythonSimpleLearn from "@/assets/python simplelearn.png";
import webInternship from "@/assets/Web Development Internship HexSoftware.png";


import { useState } from "react";

// create a new certificate in the front 

const certifications = [

  //*******2026 certifications */

  { title: "Web Development", issuer: "HexSoftware", date: "15 Jan to 15 Feb, 2026 ", icon: Award, image: webInternship },
  { title: "Programming with Python 3.X", issuer: "SimpleLearn", date: "15 February, 2026", icon: Award, image: PythonSimpleLearn },
  { title: "Python(Basic)", issuer: "HackerRank", date: "15 February, 2026", icon: Award, image: PythonHackerRank },
  { title: "FigJam Essentials for Everyday Use", issuer: "GUVI | HCL", date: "14 February, 2026", icon: Award, image: FigJam },
  { title: "Data Science and Analytics", issuer: "HP LIFE", date: "10 February, 2026", icon: Award, image: DataScience },
  { title: "AI for Business Professionals", issuer: "HP LIFE", date: "04 February, 2026 ", icon: Award, image: AIBuisness },
  { title: "Data Cleaning with SQL String Function", issuer: "Lets Upgrade", date: "30 January, 2026 ", icon: Award, image: DataClean },
  { title: "SQL Bootcamp", issuer: "Lets Upgrade", date: "27 to 29 January, 2026 ", icon: Award, image: SQLBootcamp },
  { title: "Software Engineer Intern", issuer: "HackerRank", date: "25 January, 2026 ", icon: Award, image: Softwareintern },
  { title: "Introduction to Python", issuer: "Infosys", date: "17 January, 2026 ", icon: Award, image: PythonInfosys },
  //*******2025 certifications */

  { title: "Full Stack Development", issuer: "NoviTech", date: "07 Aug to 10 Sep, 2025 ", icon: Award, image: FSDNovitech },
  { title: "Full Stack Development", issuer: "Arttifai Tech", date: "18 Aug to 25 Aug, 2025 ", icon: Award, image: FSDArttifai },
  { title: "Web Frontend Development", issuer: "Justrise Technology", date: "07 May to 30 Jun, 2025 ", icon: Award, image: WebDevelopmentjustrise },
  { title: "Artificial Intelligence", issuer: "NoviTech", date: "07 May to 12 Jun, 2025 ", icon: Award, image: AINovitech },
  { title: "Social Media Under Atteck! Are You Safe?", issuer: "NoviTech", date: "05 April, 2025 ", icon: Award, image: SocialMediaAttack },
  { title: "TCS iON Career Edge - Young Profesional ", issuer: "TCS iON", date: "31 Mar to 14 Apr, 2025 ", icon: Award, image: SoftSkill },
  { title: "Introduction to Java", issuer: "SoloLearn", date: "01 March, 2025", icon: Award, image: IntroJava },
  { title: "Java Bootcamp", issuer: "Lets Upgrade", date: "14 to 16 January, 2025 ", icon: Award, image: JavaBootcamp },
  { title: "Python Developer", issuer: "SoloLearn", date: "30 January, 2025", icon: Award, image: PythonDeveloper },
  //*******2024 certifications */
  { title: "AI for Students: Build Your Own Generative AI Model", issuer: "NxtWave", date: "24 November, 2024 ", icon: Award, image: GenAIModel },
  { title: "In To Data Driven World", issuer: "NoviTech", date: "06 October, 2024 ", icon: Award, image: DataDriven },
  { title: "Introduction to Python", issuer: "SoloLearn", date: "18 September, 2023 ", icon: Award, image: IntroPython },
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
                    <p className="text-xs font-extrabold mt-1">{cert.date}</p>
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

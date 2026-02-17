// import { useState, useEffect, useCallback } from "react";
// import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import ScrollReveal from "./ScrollReveal";

// const testimonials = [
//   {
//     text: "Sagar is a quick learner and shows strong interest in development. His dedication to learning new technologies is commendable.",
//     author: "Project Mentor",
//     role: "Senior Developer",
//   },
//   {
//     text: "Great team player with excellent problem-solving skills. Always willing to take on new challenges and deliver quality work.",
//     author: "Team Lead",
//     role: "Wipro Internship",
//   },
//   {
//     text: "Sagar's ability to quickly grasp complex concepts and apply them in real-world projects sets him apart from his peers.",
//     author: "Professor",
//     role: "College Faculty",
//   },
// ];

// const TestimonialsSection = () => {
//   const [current, setCurrent] = useState(0);
//   const [paused, setPaused] = useState(false);
//   const [direction, setDirection] = useState(1);

//   const next = useCallback(() => {
//     setDirection(1);
//     setCurrent((c) => (c + 1) % testimonials.length);
//   }, []);

//   const prev = () => {
//     setDirection(-1);
//     setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
//   };

//   useEffect(() => {
//     if (paused) return;
//     const interval = setInterval(next, 5000);
//     return () => clearInterval(interval);
//   }, [paused, next]);

//   const variants = {
//     enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
//     center: { x: 0, opacity: 1, scale: 1 },
//     exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
//   };

//   return (
//     <section className="section-padding">
//       <div className="max-w-3xl mx-auto">
//         <ScrollReveal>
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//             <span className="text-gradient">Achievements</span>
//           </h2>
//           <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
//         </ScrollReveal>

//         <ScrollReveal>
//           <div
//             className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
//             onMouseEnter={() => setPaused(true)}
//             onMouseLeave={() => setPaused(false)}
//           >
//             {/* Background glow effect */}
//             <motion.div
//               className="absolute inset-0 opacity-30"
//               animate={{
//                 background: [
//                   "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.1), transparent 70%)",
//                   "radial-gradient(circle at 70% 50%, hsl(var(--primary) / 0.1), transparent 70%)",
//                   "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.1), transparent 70%)",
//                 ],
//               }}
//               transition={{ duration: 6, repeat: Infinity }}
//             />

//             <Quote className="text-primary/20 mx-auto mb-4 relative z-10" size={40} />

//             <div className="relative z-10 min-h-[140px] flex flex-col items-center justify-center">
//               <AnimatePresence mode="wait" custom={direction}>
//                 <motion.div
//                   key={current}
//                   custom={direction}
//                   variants={variants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{ duration: 0.4, ease: "easeOut" }}
//                 >
//                   <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
//                     "{testimonials[current].text}"
//                   </p>
//                   <p className="font-semibold">{testimonials[current].author}</p>
//                   <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             <div className="flex justify-center items-center gap-4 mt-6 relative z-10">
//               <motion.button
//                 onClick={prev}
//                 className="p-2 rounded-full hover:bg-secondary transition-colors"
//                 aria-label="Previous"
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <ChevronLeft size={20} />
//               </motion.button>
//               <div className="flex gap-2">
//                 {testimonials.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => {
//                       setDirection(i > current ? 1 : -1);
//                       setCurrent(i);
//                     }}
//                     className={`h-2 rounded-full transition-all duration-300 ${
//                       i === current ? "bg-primary w-6" : "bg-muted-foreground/30 w-2"
//                     }`}
//                     aria-label={`Go to testimonial ${i + 1}`}
//                   />
//                 ))}
//               </div>
//               <motion.button
//                 onClick={next}
//                 className="p-2 rounded-full hover:bg-secondary transition-colors"
//                 aria-label="Next"
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <ChevronRight size={20} />
//               </motion.button>
//             </div>
//           </div>
//         </ScrollReveal>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;



import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import webInternship from "@/assets/Web Development Internship HexSoftware.png";
import WebDesign from "@/assets/SIMATS web design.png";
import DevOps from "@/assets/devops.png";
// import webInternship from "@/assets/Web Development Internship HexSoftware.png";
// import webInternship from "@/assets/Web Development Internship HexSoftware.png";


const achievements = [
  {
    image: webInternship, // image path
    title: "AWS - CLOUD SERVICES",
    description:
      "Attended a one-day AWS services workshop at Kongu Engineering College, gaining hands-on experience with core AWS services and cloud computing fundamentals.",
    date: "13 February, 2026",
  },
  {
    image: DevOps, // image path
    title: "Build a Career in DevOps, Cloud Computing & Cyber Security",
    description:
      "Completed Scaler Masterclass on DevOps, Cloud Computing & Cyber Security, enhancing knowledge in cloud and modern IT practices.",
    date: "3 February, 2026",
  },
  {
    image: webInternship,
    title: "TECH WHIZ CHALLENGE 2025 - QUIZ COMPETITION",
    description:
      "Won 1st Prize in TECH WHIZ CHALLENGE 2025 – Quiz Competition at Sir Issac Newton College of Engineering and Technology, showcasing excellence in technical aptitude and problem-solving",
    date: "17 November, 2025",
  },
  {
    image: webInternship,
    title: "RESEARCH & DEVELOPMENT CELL AND ISTE PROJECT EXPO 2025",
    description:
      "Participated in a project expo conducted at Sir Issac Newton College of Engineering and Technology, showcasing academic and technical projects.",
    date: "29 September, 2025",
  },
  {
    image: WebDesign,
    title: "WEB DESIGN EVENT AT TECHCAUCUS-2025",
    description:
      "Received a Certificate of Appreciation from SIMATS Engineering for participating in the Web Design event at “TechCaucus-2025” symposium, showcasing creativity and front-end development skills.",
    date: "14 August, 2025",
  },
  {
    image: webInternship,
    title: "A NATIONAL LEVEL TECHNICAL SYMPOSIUM 2025",
    description:
      "Participated in debugging and quiz competitions conducted at AVC College of Engineering, strengthening problem-solving and analytical skills.",
    date: "14 March, 2025",
  },
  {
    image: webInternship,
    title: "INTER COLLEGE QUIZ COMPETITION 2025",
    description:
      "Actively participated in the Inter-College Quiz Competition 2025 organized by Sankar IAS Academy, demonstrating strong analytical and general knowledge skills.",
    date: "28 February, 2025",
  },
];

const AchievementsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % achievements.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + achievements.length) % achievements.length);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="glass-card p-8 md:p-12 relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Glow background */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.12), transparent 70%)",
                  "radial-gradient(circle at 70% 50%, hsl(var(--primary) / 0.12), transparent 70%)",
                  "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.12), transparent 70%)",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10 grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src={achievements[current].image}
                    alt={achievements[current].title}
                    className="w-70 h-70 object-contain rounded-xl shadow-lg"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {achievements[current].title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {achievements[current].description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={16} />
                    <span>{achievements[current].date}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex justify-center items-center gap-4 mt-10 relative z-10">
              <motion.button
                onClick={prev}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>

              <div className="flex gap-2">
                {achievements.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${i === current
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 w-2"
                      }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={next}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AchievementsSection;

import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "Sagar is a quick learner and shows strong interest in development. His dedication to learning new technologies is commendable.",
    author: "Project Mentor",
    role: "Senior Developer",
  },
  {
    text: "Great team player with excellent problem-solving skills. Always willing to take on new challenges and deliver quality work.",
    author: "Team Lead",
    role: "Wipro Internship",
  },
  {
    text: "Sagar's ability to quickly grasp complex concepts and apply them in real-world projects sets him apart from his peers.",
    author: "Professor",
    role: "College Faculty",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
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
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="glass-card p-8 md:p-12 text-center relative overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Background glow effect */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.1), transparent 70%)",
                  "radial-gradient(circle at 70% 50%, hsl(var(--primary) / 0.1), transparent 70%)",
                  "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.1), transparent 70%)",
                ],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            <Quote className="text-primary/20 mx-auto mb-4 relative z-10" size={40} />

            <div className="relative z-10 min-h-[140px] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[current].text}"
                  </p>
                  <p className="font-semibold">{testimonials[current].author}</p>
                  <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-4 mt-6 relative z-10">
              <motion.button
                onClick={prev}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Previous"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1);
                      setCurrent(i);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-primary w-6" : "bg-muted-foreground/30 w-2"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <motion.button
                onClick={next}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label="Next"
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

export default TestimonialsSection;

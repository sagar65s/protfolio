import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large floating gradient orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 70%)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, 60, 120, 30, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.4), transparent 70%)",
          top: "30%",
          right: "-8%",
        }}
        animate={{
          x: [0, -60, 40, -80, 0],
          y: [0, -80, 40, -20, 0],
          scale: [1, 0.9, 1.15, 1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, hsl(var(--glow) / 0.3), transparent 70%)",
          bottom: "-15%",
          left: "20%",
        }}
        animate={{
          x: [0, 100, -50, 70, 0],
          y: [0, -40, 60, -80, 0],
          scale: [1, 1.05, 0.9, 1.1, 1],
        }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            radial-gradient(at 20% 30%, hsl(var(--primary)) 0%, transparent 50%),
            radial-gradient(at 80% 70%, hsl(var(--accent)) 0%, transparent 50%),
            radial-gradient(at 50% 50%, hsl(var(--glow)) 0%, transparent 50%)
          `,
        }}
        animate={{ opacity: [0.03, 0.06, 0.03] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30 - Math.random() * 50, 0],
            x: [0, (Math.random() - 0.5) * 40, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1 + Math.random(), 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

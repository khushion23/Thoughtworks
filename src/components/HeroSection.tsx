import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Clock, MapPin, ChevronDown } from "lucide-react";
import { useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import heroBg from "../assets/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToAgenda = () => {
    document.querySelector("#agenda")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic video-style background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <img
          src={heroBg}
          alt=""
          className="w-full h-[120%] object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="absolute inset-0 gradient-mesh opacity-70" />
      </motion.div>

      {/* Particle overlay */}
      <AnimatedBackground />

      {/* Floating decorative shapes with enhanced animation */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-violet-200/25 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -25, 15, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-rose-200/25 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-violet-300/15 blur-2xl"
      />

      {/* Animated floating rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-violet-200/20 opacity-40"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full border border-rose-200/15 opacity-30"
      />

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Removed overlapping badge */}

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6"
        >
          <span className="gradient-text">AI That Works</span>
          <br />
          <span className="text-foreground">Where It Matters</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          Closed-door CXO Breakfast Workshop on building production-grade AI platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-10 text-base sm:text-lg font-semibold"
        >
          <div className="flex items-center gap-2 sm:gap-3 bg-white text-black shadow-lg px-4 py-2 sm:px-7 sm:py-3 rounded-full border-2 border-primary/70 w-full sm:w-auto justify-center">
            <Calendar size={18} className="sm:size-22 text-yellow-400" />
            <span className="drop-shadow-md">3 March 2026</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white text-black shadow-lg px-4 py-2 sm:px-7 sm:py-3 rounded-full border-2 border-primary/70 w-full sm:w-auto justify-center">
            <Clock size={18} className="sm:size-22 text-yellow-400" />
            <span className="drop-shadow-md">8:00 AM onwards</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 bg-white text-black shadow-lg px-4 py-2 sm:px-7 sm:py-3 rounded-full border-2 border-primary/70 w-full sm:w-auto justify-center">
            <MapPin size={18} className="sm:size-22 text-yellow-400" />
            <span className="drop-shadow-md">Bangalore</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://zfrmz.in/0mE0dUrofSRwcJGE3JAT"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button pulse-cta text-primary-foreground font-semibold px-8 py-3.5 rounded-full text-base"
          >
            Register Now
          </a>
          <button
            onClick={scrollToAgenda}
            className="glow-button-outline px-8 py-3.5 rounded-full text-base font-medium"
          >
            View Agenda
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default HeroSection;
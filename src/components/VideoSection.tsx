import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import aiOverview from "@/assets/ai-overview.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const VideoSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Cinematic parallax background */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src={heroBg}
          alt=""
          className="w-full h-[130%] object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Removed title and subtitle section */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden group cursor-pointer"
          style={{ boxShadow: "0 0 60px hsla(245, 80%, 65%, 0.3)" }}
        >
          <img
            src={aiOverview}
            alt="AI technology innovation showcase"
            className="w-full h-64 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full glass-card flex items-center justify-center"
            >
              <Play size={32} className="text-primary-foreground ml-1" fill="currentColor" />
            </motion.div>
          </div>

          {/* Glow border effect */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: "inset 0 0 30px hsla(245, 80%, 65%, 0.15)" }} />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import eventPhoto from "../assets/event-photo.jpg";
import aiAbstract from "../assets/ai-abstract.jpg";

const OverviewSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);
  const floatY = useTransform(scrollYProgress, [0, 1], ["40px", "-40px"]);

  return (
    <section id="overview" ref={ref} className="section-padding gradient-mesh relative overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60, rotateY: 10 }}
          animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Main event photo with parallax */}
          <motion.div style={{ y: imageY }} className="rounded-2xl overflow-hidden shadow-2xl relative group">
            <img
              src={eventPhoto}
              alt="CXO executive breakfast workshop"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </motion.div>

          {/* Floating secondary image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-6 -right-6 w-40 h-40 rounded-xl overflow-hidden shadow-xl border-4 border-background hidden md:block"
          >
            <img
              src={aiAbstract}
              alt="AI technology visualization"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-accent/10" />
          </motion.div>

          {/* Glow effect behind image */}
          <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-violet-300/20 blur-3xl pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm font-medium text-accent uppercase tracking-widest mb-4 block"
          >
            About The Event
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
            Where Enterprise AI <span className="gradient-text">Becomes Real</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This exclusive CXO breakfast workshop explores how enterprises can modernize legacy systems and deliver industrial-grade AI capabilities.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Hosted by <strong className="text-foreground">ObserveNow Media</strong> and <strong className="text-foreground">Thoughtworks</strong>, the event focuses on real-world AI implementation strategies — moving beyond buzzwords to production-grade impact.
          </p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { number: "30+", label: "CXO Leaders" },
              { number: "5+", label: "Sessions" },
              { number: "1", label: "Day Event" },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-xl p-4 text-center">
                <div className="text-2xl font-heading font-bold gradient-text">{stat.number}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Brain, BookOpen, MessageCircle } from "lucide-react";

const reasons = [
  { icon: Network, title: "Exclusive CXO Networking", desc: "Connect with senior technology leaders in an intimate setting" },
  { icon: Brain, title: "AI Transformation Strategies", desc: "Actionable insights on building production-grade AI platforms" },
  { icon: BookOpen, title: "Enterprise Case Studies", desc: "Real-world examples of successful AI implementations" },
  { icon: MessageCircle, title: "Industry Leader Access", desc: "Direct interaction with Thoughtworks and technology experts" },
];

const WhyAttendSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-attend" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest mb-4 block">
            Value Proposition
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Why <span className="gradient-text">Attend</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
          {/* Left: Feature Boxes */}
          <div className="flex-1 flex flex-col gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="rounded-2xl px-7 py-5 flex items-start gap-4 shadow-lg bg-card border border-card"
              >
                <div className="mt-1">
                  <r.icon size={28} className="text-accent" />
                </div>
                <div>
                  <div className="font-bold text-base text-foreground mb-0.5">{r.title}</div>
                  <div className="text-sm text-muted-foreground leading-snug">{r.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Right: Animated Glowing Circle */}
          <div className="flex-1 flex justify-center items-center min-w-[320px] mt-10 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Glowing animated circle */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#6C4CF1]/60 to-[#D946EF]/40 border-2 border-[#A78BFA] shadow-2xl flex items-center justify-center relative animate-pulse-slow">
                {/* 5 glowing balls moving around circumference */}
                {[0, 1, 2, 3, 4].map((dot, idx) => (
                  <motion.div
                    key={idx}
                    className="absolute w-6 h-6 bg-white rounded-full shadow-xl"
                    style={{
                      top: `calc(50% + 130px * ${Math.sin((2 * Math.PI * idx) / 5)})`,
                      left: `calc(50% + 130px * ${Math.cos((2 * Math.PI * idx) / 5)})`,
                      boxShadow: "0 0 16px 8px #A78BFA, 0 0 32px 16px #f890d0",
                      transform: "translate(-50%, -50%)",
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "linear",
                      delay: idx * 1,
                    }}
                  />
                ))}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold text-[#D946EF]">Enterprise</span>
                  <span className="text-2xl md:text-3xl font-bold text-[#D946EF]">AI</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAttendSection;

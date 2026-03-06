import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Layers, BarChart3, Rocket, Users } from "lucide-react";

const topics = [
  { icon: AlertTriangle, title: "Why AI initiatives stall at the core systems layer" },
  { icon: Layers, title: "Modernizing legacy systems without disruption" },
  { icon: BarChart3, title: "Economics of software delivery in hybrid environments" },
];

const TopicsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="topics" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest mb-4 block">
            Key Themes
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What This Discussion <span className="gradient-text">Will Explore</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card rounded-2xl p-8 group hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center mb-5 group-hover:shadow-lg group-hover:shadow-violet-200/50 transition-shadow">
                <topic.icon size={22} className="text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground leading-snug">
                {topic.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;

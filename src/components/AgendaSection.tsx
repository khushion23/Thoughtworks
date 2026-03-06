import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const agendaItems = [
  { time: "9:00 – 9:10", title: "Guest Arrival & Registration" },
  { time: "9:10 – 9:50", title: "Welcome & Opening Remarks" },
  { time: "9:50 – 10:40", title: "Key Presentation by Thoughtworks" },
  { time: "10:40 – 11:10", title: "CXO Roundtable Discussion" },
  { time: "11:10 – 11:25", title: "Open Floor Discussion & Q&A" },
  { time: "11:25 – 11:30", title: "Closing Remarks" },
];

const AgendaSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="agenda" ref={ref} className="section-padding gradient-mesh relative overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 pointer-events-none"
      >
        <source src="/131997-751915329_medium.mp4" type="video/mp4" />
      </video>
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-accent uppercase tracking-widest mb-4 block">
            Schedule
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Event <span className="gradient-text">Agenda</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border origin-top"
            style={{ transform: "translateX(-50%)" }}
          />

          <div className="space-y-8">
            {agendaItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-violet-300/50 z-10 mt-5" />

                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card rounded-xl p-5 hover:-translate-y-0.5 transition-transform">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {item.time}
                    </span>
                    <h3 className="font-heading font-semibold text-foreground mt-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;

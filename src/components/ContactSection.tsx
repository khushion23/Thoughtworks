import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, User } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="pt-0 pb-8 md:pt-0 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white rounded-2xl py-2 md:py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
            {/* Left: Text and details */}
            <div className="flex-1 min-w-[220px]">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
                For More <span className="gradient-text">Queries</span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-6" />
              <div className="mb-2 font-semibold text-lg text-black">Vyadish Chauhan</div>
              <div className="mb-2">
                <a href="tel:+917042303500" className="text-black">+91-7042303500</a>
              </div>
              <div>
                <a href="mailto:vyadish@observenow.com" className="text-black">vyadish@observenow.com</a>
              </div>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex items-center justify-end min-w-[420px]">
              <img src="/Untitled-design-4.gif" alt="Contact Illustration" className="max-h-80 w-auto rounded-2xl object-contain shadow-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

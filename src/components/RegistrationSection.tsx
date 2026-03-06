
import { motion, useInView } from "framer-motion";
import { useRef } from "react";


const RegistrationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding gradient-mesh relative overflow-hidden">
      <div className="max-w-6xl mx-auto bg-background/80 rounded-2xl p-6 md:p-12 flex flex-col md:flex-row gap-8 items-stretch shadow-lg">
        {/* Left: Heading, description, and form */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Register Your <span className="gradient-text">Interest</span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mb-4" />
          <p className="text-muted-foreground mb-6 text-base md:text-lg">
            Secure your seat.
          </p>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="bg-white border border-[#23263A] rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
            <input type="text" placeholder="Designation" className="bg-white border border-[#23263A] rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
            <input type="text" placeholder="Organization" className="bg-white border border-[#23263A] rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
            <input type="email" placeholder="Email Address" className="bg-white border border-[#23263A] rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
            <input type="tel" placeholder="Phone Number" className="bg-white border border-[#23263A] rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
            <button type="submit" className="mt-2 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-semibold py-2.5 rounded-lg shadow-md hover:opacity-90 transition">Submit</button>
          </form>
        </div>
        {/* Right: Video with rounded corners */}
        <div className="flex-1 flex items-center justify-center">
          <video
            src="/7592140-hd-1920-1080-25fps-crop-videobolt.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl w-full h-full object-cover max-h-[340px] min-w-[260px] bg-black"
          />
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;

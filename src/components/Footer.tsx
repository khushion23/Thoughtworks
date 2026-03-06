import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="relative text-foreground pt-4 pb-2 text-center mt-8 overflow-hidden">
      {/* Animated background and overlays from HeroSection */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          src="/131997-751915329_medium.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <AnimatedBackground />
        <div className="absolute inset-0 bg-background/30 backdrop-blur-sm" />
        <div className="absolute inset-0 gradient-mesh opacity-30" />
      </div>
      <div className="relative z-10">
        <div className="mb-4 flex flex-col items-center justify-center">
          <img src="/observenow-logo.webp" alt="ObserveNow Logo" className="h-24 w-auto mb-2 mx-auto" />
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-4 text-base">
          <a href="https://x.com/ObservenowMedia/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="inline-flex items-center justify-center w-12 h-12 bg-transparent rounded-lg text-primary text-2xl border-2 border-primary"><FaTwitter /></a>
          <a href="https://www.facebook.com/people/ObserveNow-Media/61573042113968/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex items-center justify-center w-12 h-12 bg-transparent rounded-lg text-primary text-2xl border-2 border-primary"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/company/observenow/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center w-12 h-12 bg-transparent rounded-lg text-primary text-2xl border-2 border-primary"><FaLinkedinIn /></a>
          <a href="https://www.instagram.com/now_observe/reels/?hl=am-et" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center w-12 h-12 bg-transparent rounded-lg text-primary text-2xl border-2 border-primary"><FaInstagram /></a>
          <a href="https://www.youtube.com/@ObserveNowMedia" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="inline-flex items-center justify-center w-12 h-12 bg-transparent rounded-lg text-primary text-2xl border-2 border-primary"><FaYoutube /></a>
        </div>
        <div className="mb-2 text-base flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 font-medium text-foreground">
          <a href="#" className="underline mx-2">Terms of use</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="underline mx-2">Privacy Notice</a>
          <span className="hidden sm:inline"></span>
        </div>
        <div className="text-xs mb-2 px-2 text-center text-foreground">
          For more information on how we collect and process your personal data please read our <a href="#" className="underline">Privacy Policy</a>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

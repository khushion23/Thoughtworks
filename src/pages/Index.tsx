import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import TopicsSection from "@/components/TopicsSection";
import AgendaSection from "@/components/AgendaSection";
import WhyAttendSection from "@/components/WhyAttendSection";
import VideoSection from "@/components/VideoSection";
import RegistrationSection from "@/components/RegistrationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <TopicsSection />
      <AgendaSection />
      <WhyAttendSection />
      <RegistrationSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;

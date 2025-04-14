import * as React from "react";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import { HeroSection } from "../../components/HeroSection/HeroSection";
import { ServicesSection } from "../../components/SevicesSection/SevicesSection";
import { AltServicesSection } from "../../components/AltServicesSection/AltServicesSection";
import { StatisticSection } from "../../components/StatisticSection/StatisticSection";
import { WhyChooseUsSection } from "../../components/WhyChooseUsSection/WhyChooseUsSection";
import { PartnerSection } from "../../components/partnersSection/partnersSection";
import FounderPersonSection from "../../components/founderPerson/founderPerson";
const Home = () => {
  AOS.init({ once: true });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollTop = (e) => {
    e.preventDefault();
    const element = document.getElementById("hero");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <HeroSection />
      <AltServicesSection />
      <WhyChooseUsSection />
      <ServicesSection />
      {/* <PartnerSection /> */}
      <StatisticSection />
      <FounderPersonSection />
      <button className="back-top-btn" onClick={handleScrollTop}>
        <i class="bi bi-chevron-up"></i>
      </button>
    </>
  );
};

export const HomePage = Home;

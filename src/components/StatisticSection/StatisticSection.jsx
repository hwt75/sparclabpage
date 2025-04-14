import { useTranslation } from "react-i18next";
import "./index.scss";
import { useScroll } from "../../layouts/ScrollContext";
import { useEffect, useRef } from "react";
import category1 from "../../assets/image/raspberry_pi_4.png";
import category2 from "../../assets/image/jetson-orin-nano.jpg";
import category3 from "../../assets/image/jetson-nano.jpg";
import category4 from "../../assets/image/pc-cloud.jpg";


export const StatisticSection = () => {
  const { t } = useTranslation();
  const { setActiveSection } = useScroll();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [setActiveSection]);

  return (
    <section id="statistic" className="statistic" ref={sectionRef}>
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Categories</h2>
          {/* <p>{t("page.statistic.subtitle")}</p> */}
        </div>
        <div className="row card-row">
          <div className="col-md-4 number-card">
            <img src={category1} alt="Raspberry pi"/>
            <h3>Raspberry Pi 4</h3>
            <p>Core function, Inference</p>
          </div>
          <div className="col-md-4 number-card">
            <img src={category2} alt="Jetson Nano"/>
            <h3>NVIDIA Jetson Orin Nano</h3>
            <p>Core function + Transfer Learning</p>
          </div>
          <div className="col-md-4 number-card">
            <img src={category3} alt="Jetson Nano"/>
            <h3>NVIDIA Jetson Nano</h3>
            <p>Core function + Transfer Learning + Base training</p>
          </div>
          <div className="col-md-4 number-card">
            <img src={category4} alt="PC Cloud"/>
            <h3>General Computer </h3>
            <p>Database + Monitor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

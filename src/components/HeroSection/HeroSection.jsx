import "./HeroSection.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import ModalContact from "../ModalContact/ModalContact";
import { useScroll } from "../../layouts/ScrollContext";
import systemImage1 from "../../assets/image/ESCA_System.jpg";

export const HeroSection = () => {
  const { t } = useTranslation();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
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

  const openPopup = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <section id="hero" class="hero" ref={sectionRef}>
      <div class="info d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-lg-5 text-left">
              <h2
                data-aos="fade-down"
                className="text-uppercase"
                style={{ fontSize: "30px" }}
              >
                Project ESCA
              </h2>
              <p data-aos="fade-up">
                The D-ESCA3 (Environmental Sound Collection and Analysis)
                project aims to develop a robust system capable of detecting
                abnormal audio events in real time.
              </p>
              <a
                data-aos="fade-up"
                data-aos-delay="200"
                onClick={openPopup}
                class="btn-get-started"
              >
                {t("page.hero-section.tilte.getstarted")}
              </a>
            </div>

            <div class="col-lg-7">
              <img src={systemImage1} alt="Hero" />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      <ModalContact isOpen={isPopupVisible} setIsOpen={setIsPopupVisible} />
    </section>
  );
};

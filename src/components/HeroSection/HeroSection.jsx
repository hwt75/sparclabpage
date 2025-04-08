import "./HeroSection.scss";
import heroCarousel1 from "../../assets/image/hero.jpg";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import ModalContact from "../ModalContact/ModalContact";
import { useScroll } from "../../layouts/ScrollContext";

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
            <div class="col-lg-6 text-left">
              <h2 data-aos="fade-down" className="text-uppercase" style={{ fontSize: "30px"}}>
                {t("page.hero-section.tilte.welcome")}
              </h2>
              <p data-aos="fade-up">{t("page.hero-section.tilte.lorem")}</p>
              <a
                data-aos="fade-up"
                data-aos-delay="200"
                onClick={openPopup}
                class="btn-get-started"
              >
                {t("page.hero-section.tilte.getstarted")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="hero-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div
          class="carousel-item active"
          style={{ backgroundImage: `url(${heroCarousel1})` }}
        ></div>
      </div>

      {/* Popup Modal */}
      <ModalContact isOpen={isPopupVisible} setIsOpen={setIsPopupVisible} />
    </section>
  );
};

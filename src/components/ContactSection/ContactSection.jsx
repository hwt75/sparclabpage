import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ModalContact from "../ModalContact/ModalContact";
import "./ContactSection.scss";
import { useScroll } from "../../layouts/ScrollContext";

export const ContactSection = () => {
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
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-7">
            <h3>{t("page.contact.title")}</h3>
            <p>{t("page.contact.subTitle")}</p>
          </div>
          <div className="col-12 col-sm-4 text-sm-end text-center mt-3 mt-sm-0">
            <button className="contact-btn" onClick={openPopup}>
              {t("page.header.nav.contact")}
            </button>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <h3>Contact Form</h3>
            <p>Name: Tuan TranTran</p>
            <p>Age: 18</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      <ModalContact isOpen={isPopupVisible} setIsOpen={setIsPopupVisible} />
    </section>
  );
};

import * as React from "react";
import { useEffect, useRef } from "react";
import "./partnersSection.scss";
import { useTranslation } from "react-i18next";
import customer from "../../assets/Picture3.avif";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useScroll } from "../../layouts/ScrollContext";

export const PartnerSection = () => {
  const { t } = useTranslation();
  useEffect(() => {
    const img = new Image();
    img.src = customer;  // Tải ảnh trước khi hiển thị
  }, [customer]);

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
    <div className="partner" id="partner" ref={sectionRef}>
      <div className="" data-aos="fade-up">
        <div className="list-partner-inner">
          <div className="partner-title">
          <h4>{t("page.partner.section.title")}</h4>
          <p>{t("page.partner.section.description")}</p>
          </div>
          <div className="list-partner">
            <img src={customer} loading="eager"/>
            <img src={customer} loading="lazy"/>
          </div>
          <div className="list-partner animation-revese">
            <img src={customer} loading="lazy"/>
            <img src={customer} loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

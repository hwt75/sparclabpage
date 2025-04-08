import { useTranslation } from "react-i18next";
import "./index.scss";
import { useScroll } from "../../layouts/ScrollContext";
import { useEffect, useRef } from "react";

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
          <h2>{t("page.statistic.title")}</h2>
          <p>{t("page.statistic.subtitle")}</p>
        </div>
        <div className="row card-row">
          <div className="col-lg-3 col-md-4 number-card">
            <h1>3+</h1>
            <p>{t("page.statistic.card.1")}</p>
          </div>
          <div className="col-lg-3 col-md-4 number-card">
            <h1>50+</h1>
            <p>{t("page.statistic.card.2")}</p>
          </div>
          <div className="col-lg-3 col-md-4 number-card">
            <h1>20+</h1>
            <p>{t("page.statistic.card.3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

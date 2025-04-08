import { useTranslation } from "react-i18next";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import whyUsCompanyImg from "../../assets/why-us-company.jpg";
import { ReasonItem } from "./ReasonItem/ReasonItem";
import { useScroll } from "../../layouts/ScrollContext";

export const WhyChooseUsSection = () => {
  const { t, i18n } = useTranslation();

  const studentReason = [
    {
      title: t("page.why-us.student.reason.1.title"),
      desc: t("page.why-us.student.reason.1.desc"),
    },
    {
      title: t("page.why-us.student.reason.2.title"),
      desc: t("page.why-us.student.reason.2.desc"),
    },
    {
      title: t("page.why-us.student.reason.3.title"),
      desc: t("page.why-us.student.reason.3.desc"),
    },
    {
      title: t("page.why-us.student.reason.4.title"),
      desc: t("page.why-us.student.reason.4.desc"),
    },
  ];

  const companyReason = [
    {
      title: t("page.why-us.company.reason.1.title"),
      desc: t("page.why-us.company.reason.1.desc"),
    },
    {
      title: t("page.why-us.company.reason.2.title"),
      desc: t("page.why-us.company.reason.2.desc"),
    },
    {
      title: t("page.why-us.company.reason.3.title"),
      desc: t("page.why-us.company.reason.3.desc"),
    },
    {
      title: t("page.why-us.company.reason.4.title"),
      desc: t("page.why-us.company.reason.4.desc"),
    },
    {
      title: t("page.why-us.company.reason.5.title"),
      desc: t("page.why-us.company.reason.5.desc"),
    },
  ];

  const [isStudentTab, setIsStudentTab] = useState(false);
  const [data, setData] = useState(studentReason);
  const imageSrc = whyUsCompanyImg;

  useEffect(() => {
    setData(isStudentTab ? studentReason : companyReason);
  }, [i18n.language]);

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
    <section id="why-us" className="why-us section-bg" ref={sectionRef}>
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>{t("page.why-us.title")}</h2>

        </div>
        <div className="row content-row">
          <div className="col-lg-5 col-md-5 img-side">
            <img src={imageSrc} alt="why-us" />
          </div>
          <div className="col-lg-7 col-md-7 reason-side">
            {data.map((item, index) => (
              <ReasonItem data={item} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

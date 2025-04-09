import { useTranslation } from "react-i18next";
import "./ServicesSection.scss";
import { useEffect, useRef, useState } from "react";
import comStep1 from "../../assets/image/services/step_1.jpg";
import comStep2 from "../../assets/image/services/step_2.jpg";
import comStep3 from "../../assets/image/services/step_3.jpg";
import comStep4 from "../../assets/image/services/step_4.jpg";
import studentStep1 from "../../assets/image/services/student_step_1.jpg";
import studentStep2 from "../../assets/image/services/student_step_2.jpg";
import studentStep3 from "../../assets/image/services/student_step_3.jpg";
import studentStep4 from "../../assets/image/services/student_step_4.jpg";
import { useScroll } from "../../layouts/ScrollContext";

export const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const companyItemsData = [
    {
      icon: <i className="fa-solid fa-mountain-city"></i>,
      title: t("page.servicesSection.company.items.0.title"),
      desc: t("page.servicesSection.company.items.0.desc"),
      img: comStep1
    },
    {
      icon: <i className="fa-solid fa-arrow-up-from-ground-water"></i>,
      title: t("page.servicesSection.company.items.1.title"),
      desc: t("page.servicesSection.company.items.1.desc"),
      img: comStep2
    },
    {
      icon: <i className="fa-solid fa-compass-drafting"></i>,
      title: t("page.servicesSection.company.items.2.title"),
      desc: t("page.servicesSection.company.items.2.desc"),
      img: comStep3
    },
    {
      icon: <i className="fa-solid fa-trowel-bricks"></i>,
      title: t("page.servicesSection.company.items.3.title"),
      desc: t("page.servicesSection.company.items.3.desc"),
      img: comStep4
    },
  ];

  const studentItemsData = [
    {
      icon: <i className="fa-solid fa-mountain-city"></i>,
      title: t("page.servicesSection.student.items.0.title"),
      desc: t("page.servicesSection.student.items.0.desc"),
      img: studentStep1
    },
    {
      icon: <i className="fa-solid fa-arrow-up-from-ground-water"></i>,
      title: t("page.servicesSection.student.items.1.title"),
      desc: t("page.servicesSection.student.items.1.desc"),
      img: studentStep2
    },
    {
      icon: <i className="fa-solid fa-compass-drafting"></i>,
      title: t("page.servicesSection.student.items.2.title"),
      desc: t("page.servicesSection.student.items.2.desc"),
      img: studentStep3
    },
    {
      icon: <i className="fa-solid fa-trowel-bricks"></i>,
      title: t("page.servicesSection.student.items.3.title"),
      desc: t("page.servicesSection.student.items.3.desc"),
      img: studentStep4
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [isStudentTab, setIsStudentTab] = useState(false);
  const [serviceItemsData, setServicesItemData] = useState(studentItemsData);

  useEffect(() => {
    setServicesItemData(isStudentTab ? studentItemsData : companyItemsData);
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
    <section id="services" className="services" ref={sectionRef}>
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>{t("page.servicesSection.heading")}</h2>
          <p>{isStudentTab ? t("page.servicesSection.student.subHeading") : t("page.servicesSection.company.subHeading")}</p>
          {/* <div className="tab-list">
            <p
              className={`tab-item ${!isStudentTab && "active"}`}
              onClick={() => {
                setIsStudentTab(false);
                setServicesItemData(companyItemsData);
                setCurrentStep(0);
              }}
            >
              {t("page.tab-list.company")}
            </p>
            <p
              className={`tab-item ${isStudentTab && "active"}`}
              onClick={() => {
                setIsStudentTab(true);
                setServicesItemData(studentItemsData);
                setCurrentStep(0);
              }}
            >
              {t("page.tab-list.student")}
            </p>
          </div> */}
        </div>

        <ul className="progress-bar">
          {serviceItemsData.map((_, index) => (
            <li className={`progress-item ${index <= currentStep && "active"}`} onClick={() => setCurrentStep(index)}>
              <div className="progress-wrap">
                <span>{index + 1}</span>
                <p className="progress-title">{serviceItemsData[index].title}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="row gap-3">
          <div className="service-img col-lg-5">
            <img src={serviceItemsData[currentStep].img} alt="" />
          </div>
          <div className="col-lg-6">
            <h5 className="service-title">{serviceItemsData[currentStep].title}</h5>
            <p className="service-desc">{serviceItemsData[currentStep].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

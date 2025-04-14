import { useTranslation } from "react-i18next";
import "./ServicesSection.scss";
import { useEffect, useRef, useState } from "react";
import studentStep1 from "../../assets/image/services/student_step_1.jpg";
import studentStep2 from "../../assets/image/services/student_step_2.jpg";
import studentStep3 from "../../assets/image/services/student_step_3.jpg";
import studentStep4 from "../../assets/image/services/student_step_4.jpg";
import { useScroll } from "../../layouts/ScrollContext";
import systemImage3 from "../../assets/image/ESCA_System_2.png";

export const ServicesSection = () => {
  const { t, i18n } = useTranslation();

  const studentItemsData = [
    {
      icon: <i className="fa-solid fa-mountain-city"></i>,
      title: "Data Collection & Labeling",
      desc: "Collect machine logs and apply automatic labeling using inference results to build labeled datasets for training.",
      img: systemImage3
    },
    {
      icon: <i className="fa-solid fa-arrow-up-from-ground-water"></i>,
      title: "Dataset Preparation",
      desc: "Organize, label, and combine raw sensor data into a structured format ready for training.",
      img: systemImage3
    },
    {
      icon: <i className="fa-solid fa-compass-drafting"></i>,
      title: "Model Training",
      desc: "Configure training parameters and train multiple models to find the best-performing setup.",
      img: systemImage3
    },
    {
      icon: <i className="fa-solid fa-trowel-bricks"></i>,
      title: "Inference Testing",
      desc: "Evaluate and compare trained models to select the most accurate one for deployment.",
      img: systemImage3
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

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
    <section id="services" className="services section-bg" ref={sectionRef}>
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Overview of Data flow</h2>
        </div>

        <div className="service-img ">
            <img src={systemImage3} alt="" />
          </div>

        <ul className="progress-bar">
          {studentItemsData.map((_, index) => (
            <li className={`progress-item ${index <= currentStep && "active"}`} onClick={() => setCurrentStep(index)}>
              <div className="progress-wrap">
                <span>{index + 1}</span>
                <p className="progress-title">{studentItemsData[index].title}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="row gap-3 justify-content-center">
          <div className="col-lg-7 text-center">
            <h5 className="service-title">{studentItemsData[currentStep].title}</h5>
            <p className="service-desc">{studentItemsData[currentStep].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

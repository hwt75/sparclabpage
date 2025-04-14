import { useTranslation } from "react-i18next";
import "./index.scss";
import { useEffect, useRef, useState } from "react";
import whyUsCompanyImg from "../../assets/why-us-company.jpg";
import { ReasonItem } from "./ReasonItem/ReasonItem";
import { useScroll } from "../../layouts/ScrollContext";
import systemImage2 from "../../assets/image/ESCA_System_1.png";

export const WhyChooseUsSection = () => {
  const { t, i18n } = useTranslation();

  const studentReason = [
    {
      title: "Machine",
      desc: "Provides sensor log data (e.g., temperature, sound, vibration) from equipment or devices to the cloud toolkit for analysis and training.",
    },
    {
      title: "Deep Learning User",
      desc: "Users contribute raw sensor data, define neural network structures, and configure hyperparameters (like learning rate or batch size) to guide the model training process in the cloud.",
    },
    {
      title: "Cloud Deep Learning Toolkit",
      desc: "Central processing hub that collects data, neural network structures, and hyperparameters, coordinating training and management of deep learning models.",
    },
    {
      title: "Storage",
      desc: "Stores general-purpose data such as training logs, sensor data archives, and other non-relational data outputs.",
    },
    {
      title: "Database",
      desc: "Stores structured data, metadata, and possibly model performance metrics in an organized, queryable format.",
    },
    {
      title: "Deep Learning Library",
      desc: "Executes the actual training process using deep learning frameworks (e.g., TensorFlow, PyTorch), based on the inputs provided by the cloud toolkit.",
    },
    {
      title: "Release Edge Devices",
      desc: "Receives trained model weights from the cloud toolkit and deploys them to edge devices for real-time inference and monitoring.",
    },
  ];

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
    <section id="why-us" className="why-us" ref={sectionRef}>
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>The Cloud computing</h2>
          <p>
            It allows users to easily operate Data/NeuralNet/Hyper-Parameter by
            connecting to CDLT and perform deep learning learning through Deep
            Learning Lib. Data processing history, model creation history, and
            learning status/results are stored in an external storage/database,
            and can be displayed or downloaded if needed.
          </p>
        </div>
        <div className="row content-row">
          <div className="col-lg-6 col-md-5 img-side">
            <img src={systemImage2} alt="why-us" />
          </div>
          <div className="col-lg-6 col-md-7 reason-side">
            {studentReason.map((item, index) => (
              <ReasonItem data={item} key={item.title} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

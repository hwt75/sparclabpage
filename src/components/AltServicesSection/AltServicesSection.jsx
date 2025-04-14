import { IconBox } from "./IconBox/IconBox";
import "./AltServicesSection.scss";
import { useTranslation } from "react-i18next";
import systemImage4 from "../../assets/image/ESCA_System_3.png";

export const AltServicesSection = () => {
  const { t } = useTranslation();

  const altServicesData = [
    {
      //icon: <i className="bi bi-easel flex-shrink-0"></i>,
      title: "Microphone",
      desc: "Record analog sounds",
    },
    {
      //icon: <i className="bi bi-patch-check flex-shrink-0"></i>,
      title: "AI-Network Tablet",
      desc: "Collect sounds, store sounds, inference, monitoring. Transfer normal sounds and abnormal sound to train model.",
    },
    {
      // icon: <i className="bi bi-brightness-high flex-shrink-0"></i>,
      title: "Cloud servers",
      desc: "Train AI Model. Receives labeled audio data.",
    },
  ];

  return (
    <section id="services" className="alt-services">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-around gy-4">
          <div className="col-lg-6">
            <img
              src={systemImage4}
              style={{
                width: "100%",
                borderRadius: "16px",
                objectFit: "contain"
              }}
              alt=""
            />
          </div>
          <div className="col-lg-5 d-flex flex-column justify-content-center ">
            <h2>{t("altServices.heading")}</h2>

            {altServicesData.map((item, index) => {
              if (index === altServicesData.length - 1) {
                return <IconBox item={item} key={index} />;
              }
              return <IconBox item={item} key={index} borderBottom />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

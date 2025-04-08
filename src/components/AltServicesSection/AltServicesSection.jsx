import { IconBox } from "./IconBox/IconBox";
import "./AltServicesSection.scss";
import AltServicesImg from "../../assets/image/alt-services.jpg";
import { useTranslation } from "react-i18next";

export const AltServicesSection = () => {
  const { t } = useTranslation();

  const altServicesData = [
    {
      //icon: <i className="bi bi-easel flex-shrink-0"></i>,
      title: t("altServices.items.0.title"),
      desc: t("altServices.items.0.desc"),
    },
    {
      //icon: <i className="bi bi-patch-check flex-shrink-0"></i>,
      title: t("altServices.items.1.title"),
      desc: t("altServices.items.1.desc"),
    },
    {
      // icon: <i className="bi bi-brightness-high flex-shrink-0"></i>,
      title: t("altServices.items.2.title"),
      desc: t("altServices.items.2.desc"),
    },
    {
      // icon: <i className="bi bi-brightness-high flex-shrink-0"></i>,
      title: t("altServices.items.3.title"),
      desc: t("altServices.items.3.desc"),
    },
  ];

  return (
    <section id="services" className="alt-services">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-around gy-4">
          {/* <div className="col-lg-7 img-bg" style={{
                        backgroundImage: `url(${AltServicesImg})`
                        , backgroundSize: "auto",
                        backgroundRepeat: "no-repeat",  width: "600px" , height :"650px"}}
                    data-aos="zoom-in"
                        data-aos-delay="100"></div> */}
          <img
            src={AltServicesImg}
            className="col-lg-7 img-bg"
            style={{
              width: "600px",
              // height: "550px",
              borderRadius: "8px"
            }}
          />
          <div className="col-lg-5 d-flex flex-column justify-content-center ">
            <h3>{t("altServices.heading")}</h3>
            {/* <p>{t("altServices.description")}</p> */}

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

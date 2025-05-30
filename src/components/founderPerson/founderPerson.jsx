import * as React from "react";
import "./founderPerson.scss";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import founder1Danh from "../../assets/image/founders/danh.png";
import founder2 from "../../assets/image/founders/teacher_1.jpg";
import founder3 from "../../assets/image/founders/teacher_2.jpg";

import "bootstrap/dist/js/bootstrap.bundle.min";
import { useTranslation } from "react-i18next";
import { useRef, useEffect } from "react";
import { useScroll } from "../../layouts/ScrollContext";

const FounderPersonSection = () => {
  const [show, setShow] = React.useState(false);
  const [infoTeacher, setinfoTeacher] = React.useState();
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

  const data = [
    {
      id: 1,
      name: "Toni Nguyen",
      posistion: "Marketing & Sales Manager",
      quote: "CEO",
      img: founder1Danh,
    },
    {
      id: 2,
      name: "Karl-Heinz Hennecke",
      posistion: t("page.founderPerson.members.second.role"),
      quote: t("page.founderPerson.members.toni.role"),
      img: founder2,
    },    {
      id: 3,
      name: "Chloe Pham",
      posistion: t("page.founderPerson.members.third.role"),
      quote: t("page.founderPerson.members.toni.role"),
      img: founder3,
    },
    {
      id: 4,
      name: "Chloe Pham",
      posistion: t("page.founderPerson.members.third.role"),
      quote: t("page.founderPerson.members.toni.role"),
      img: founder3,
    },
    {
      id: 5,
      name: "Chloe Pham",
      posistion: t("page.founderPerson.members.third.role"),
      quote: t("page.founderPerson.members.toni.role"),
      img: founder3,
    },
    {
      id: 6,
      name: "Chloe Pham",
      posistion: t("page.founderPerson.members.third.role"),
      quote: t("page.founderPerson.members.toni.role"),
      img: founder3,
    },
  ];
  
  const handleClickCard = (data) => {
    setShow(false);
    setinfoTeacher(data);
    setShow(true);
  };
  // const handleClose = (data) => setShow(data);
  return (
    <section className="news" id="team" ref={sectionRef}>
      <div className="container-team">
        <div className="header-container">
          <h1>{t("page.founderPerson.title")}</h1>
          <p>
            {t("page.founderPerson.description")}
          </p>
        </div>
        <div className="container-team">
          {data.map((item,index)=>(
            <div className="team-member" onClick={()=> {handleClickCard(item)}}>
            <img src={item.img} alt="image-founder-item" className="personal-image"/>
            <div className="team-info">
              <div className="left">
                <h3>{item.name}</h3>
                <p>{item.posistion}</p>
              </div>
              {/* <div className="social-icons">
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </div> */}
            </div>
          </div>
          ))}          
        </div>
      </div>
      {/* <ModalHandleClickCard
        data={infoTeacher}
        open={show}
        setshowmodal={handleClose}
      /> */}
    </section>
  );
};

export default FounderPersonSection;

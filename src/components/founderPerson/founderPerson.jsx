import * as React from "react";
import "./founderPerson.scss";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import HoTrongThanh from "../../assets/image/founders/HoTrongThanh.jpg";
import NguyenHaiMinh from "../../assets/image/founders/NguyenHaiMinh.jpg";
import NguyenQuangThinh from "../../assets/image/founders/NguyenQuangThinh.jpg";
import PhungBaTruongGiang from "../../assets/image/founders/PhungBaTruongGiang.jpg";
import PhamMinhHoang from "../../assets/image/founders/PhamMinhHoang.jpg";
import avt from "../../assets/image/founders/avatar.jpg";
import LogoSparc from "../../assets/image/logo_sparc.png";
import Dung from "../../assets/image/founders/dung.jpg";
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
      name: "Ph. D. Huy-Dung Han ",
      posistion: "Data Scientist",
      quote: t("page.founderPerson.members.toni.role"),
      img: Dung,
    },
    {
      id: 2,
      name: "Truong-Giang Phung",
      posistion: "Software Architect, Graphic Engineer",
      quote: t("page.founderPerson.members.toni.role"),
      img: PhungBaTruongGiang,
    },
    {
      id: 3,
      name: "Hai-Minh Nguyen ",
      posistion: "Embedded Software Developer",
      quote: t("page.founderPerson.members.toni.role"),
      img: NguyenHaiMinh,
    },
    {
      id: 4,
      name: "Minh-Hoang Pham ",
      posistion: "Artificial Intelligence Engineer",
      quote: t("page.founderPerson.members.toni.role"),
      img: PhamMinhHoang,
    },
    {
      id: 5,
      name: "Trong-Thanh Ho  ",
      posistion: "Artificial Intelligence Engineer",
      quote: t("page.founderPerson.members.toni.role"),
      img: HoTrongThanh,
    },
    {
      id: 9,
      name: "Thinh-Quang Nguyen  ",
      posistion: "Artificial Intelligence Engineer",
      quote: t("page.founderPerson.members.toni.role"),
      img: NguyenQuangThinh,
    },
    {
      id: 2,
      name: "Akira Wada ",
      posistion: "Project Manager",
      quote: t("page.founderPerson.members.toni.role"),
      img: avt,
    },
    {
      id: 3,
      name: "Tsukasa Okabe",
      posistion: "Project Manager",
      quote: t("page.founderPerson.members.toni.role"),
      img: avt,

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
          <p>{t("page.founderPerson.description")}</p>
        </div>
        <div className="container-team">
          {data.map((item, index) => (
            <div
              className="team-member"
              onClick={() => {
                handleClickCard(item);
              }}
            >
              {item.img && (
                <img
                  src={item.img}
                  alt="image-founder-item"
                  className="personal-image"
                />
              )}
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

import * as React from "react";
import { useState, useEffect } from "react";
import "./header.scss";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import logo from "../assets/image/logo_sparc.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useScroll } from "./ScrollContext";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [activeItem, setActiveItem] = useState("hero");
  const [dropDown1Active, setDropDown1Active] = useState(false);
  const [dropDown2Active, setDropDown2Active] = useState(false);

  const { activeSection } = useScroll();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  //   window.location.reload()
  // };
  // const getLocalLanguage = () => {
  //   const language = localStorage.getItem('i18nextLng');
  //   return language ?? "en"
  // }
  // useEffect(()=>{
  //   setLocalLanguage(getLocalLanguage());
  // },[])
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveItem(activeSection);
  }, [activeSection]);

  useEffect(() => {
    if (window.location.pathname !== "/") {
      setActiveItem("");
    }
  }, [window.location.pathname])

  const handleClickButtonMenuMobile = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.toggle("mobile-nav-active");
    document.querySelector(".mobile-nav-show").classList.toggle("d-none");
    document.querySelector(".mobile-nav-hide").classList.toggle("d-none");
  };

  const handleClickItemMenu = (e, string) => {
    e.preventDefault();
    setActiveItem(string);
    if (window.location.pathname === "/") {
      const element = document.getElementById(string);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
  
      document.querySelector("body").classList.toggle("mobile-nav-active");
      document.querySelector(".mobile-nav-show").classList.toggle("d-none");
      document.querySelector(".mobile-nav-hide").classList.toggle("d-none");
    }
    else {
      navigate("/");
    }
  }

  // document.querySelectorAll(".navbar .dropdown > a").forEach((el) => {
  //   el.addEventListener("click", function (event) {
  //     if (document.querySelector(".mobile-nav-active")) {
  //       event.preventDefault();
  //       this.classList.toggle("active");
  //       this.nextElementSibling.classList.toggle("dropdown-active");

  //       let dropDownIndicator = this.querySelector(".dropdown-indicator");
  //       dropDownIndicator.classList.toggle("bi-chevron-up");
  //       dropDownIndicator.classList.toggle("bi-chevron-down");
  //     }
  //   });
  // });

  // const handleClickDropdown1 = (event) => {
  //   event.preventDefault();
  //   setDropDown1Active(!dropDown1Active);
  // };

  // const handleClickDropdown2 = (event) => {
  //   event.preventDefault();
  //   setDropDown2Active(!dropDown2Active);
  // };

  return (
    <>
      {/* ======= Header ======= */}
      <div className="align-items-center icon-header">
        <div className="container icon-header-container">
          <div className="left-navbar">
            <button
              className="social-link-icon border-end border-light-subtle left-icon-first"
              onClick={() =>
                window.open("http://maps.google.co.in/maps?q=Germany")
              }
            >
              <i className="bi bi-geo-alt-fill" />
              <span>Viet Nam</span>
            </button>
            <button
              className="social-link-icon border-end border-light-subtle left-icon"
              onClick={() => {
                navigator.clipboard.writeText("info@talent-netzwerk.org");
              }}
            >
              <i class="bi bi-envelope-fill"></i>
              <span>sparc.hust@gmail.com</span>
            </button>
            <button
              className="social-link-icon left-icon-last"
              onClick={() => {
                navigator.clipboard.writeText("+84 988968338");
              }}
            >
              <i class="bi bi-telephone-fill"></i>
              <span>+84 988968338</span>
            </button>
          </div>
          <div className="right-navbar">
            <button
              className="social-link-icon"
              onClick={() => window.open("https://www.facebook.com/sparclab.hust")}
            >
              <i class="bi bi-facebook"></i>
            </button>
            <div className="language">
              <span
                className={`border-end border-light-subtle ${
                  i18n.language === "en" && "active"
                }`}
                onClick={() => {
                  changeLanguage("en");
                }}
              >
                EN
              </span>
              
            </div>
          </div>
        </div>
      </div>
      <header id="header" className="header d-flex align-items-center">
        <div className="header-container container d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img
              src={logo}
              alt="anh_logo"
              style={{ maxWidth: "120px", height: "auto", zIndex: 2 }}
            />
          </a>
          <p className="company-name mobile-nav-show">Sparc lab</p>
          <i
            className="mobile-nav-toggle mobile-nav-show bi bi-list"
            onClick={handleClickButtonMenuMobile}
          />
          <i
            className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"
            onClick={handleClickButtonMenuMobile}
          />
          <nav id="navbar" className={`navbar ${window.location.pathname === "/contact" && " d-none"}`}>
            <ul>
              <li onClick={(e) => handleClickItemMenu(e, "hero")}>
                <a href="#hero" className={activeItem === "hero" && "active"} >{t("page.header.nav.home")}</a>
              </li>
              <li onClick={(e) => handleClickItemMenu(e, "statistic")}>
                <a href="#statistic" className={activeItem === "statistic" && "active"} >{t("page.header.nav.figure")}</a>
              </li>
              <li onClick={(e) => handleClickItemMenu(e, "why-us")}>
                <a href="#why-us" className={activeItem === "why-us" && "active"} >{t("page.header.nav.why-us")}</a>
              </li>
              <li onClick={(e) => handleClickItemMenu(e, "services")}>
                <a href="#services" className={activeItem === "services" && "active"}>{t("page.header.nav.services")}</a>
              </li>
              <li onClick={(e) => handleClickItemMenu(e, "course")}>
                <a href="#course" className={activeItem === "course" && "active"}>{t("page.header.nav.course")}</a>
              </li>
              <li onClick={(e) => handleClickItemMenu(e, "course")} style={{cursor: "pointer"}}>
                <a className={activeItem === "course" && "active"} onClick={()=>{window.location.href = '/project/ecsa'}}>ECSA</a>
              </li>

            </ul>
          </nav>
          {/* .navbar */}
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

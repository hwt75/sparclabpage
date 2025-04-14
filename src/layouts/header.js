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

  const { activeSection } = useScroll();  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <header id="header" className="header d-flex align-items-center">
        <div className="header-container container d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold white-color">SPARC Lab</span>
            <span className="ml-2 text-sm border-l pl-2 white-color">HUST</span>
          </div>  
          </a>
          {/* <p className="company-name mobile-nav-show">Sparc lab</p> */}
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
                <a href="#hero" className={activeItem === "hero" && "active"} style={{color: "#fff"}}>{t("page.header.nav.home")}</a>
              </li>
              <li onClick={(e) => handleClickItemMenu(e, "why-us")}>
                <a href="#why-us" className={activeItem === "why-us" && "active"} style={{color: "#fff"}}>Cloud</a>
              </li>
              <li onClick={(e) => handleClickItemMenu(e, "services")}>
                <a href="#services" className={activeItem === "services" && "active"}style={{color: "#fff"}}>Data flow</a>
              </li>
              <li onClick={(e) => handleClickItemMenu(e, "statistic")}>
                <a href="#statistic" className={activeItem === "statistic" && "active"} style={{color: "#fff"}}>Categories</a>
              </li>
              <li onClick={(e) => handleClickItemMenu(e, "team")}>
                <a href="#course" className={activeItem === "team" && "active"}style={{color: "#fff"}}>Members</a>
              </li>
              
            </ul>
          </nav>
        </div>
      </header>
      {/* <nav className="gradient-bg text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold">SPARC Lab</span>
            <span className="ml-2 text-sm border-l pl-2">HUST</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-blue-200 white-color transition">
            {t("page.header.nav.home")}
            </a>
            <a href="#why-us" className="hover:text-blue-200 white-color transition">
            {t("page.header.nav.why-us")}
            </a>
            <a href="#services" className="hover:text-blue-200 white-color transition">
            {t("page.header.nav.services")}
            </a>
            <a href="#course" className="hover:text-blue-200 white-color transition">
            {t("page.header.nav.course")}
            </a>
            <a href="#contact" className="hover:text-blue-200 white-color transition">
              Contact
            </a>
          </div>
        </div>
      </nav> */}
    </>
  );
};

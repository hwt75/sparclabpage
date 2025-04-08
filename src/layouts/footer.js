import * as React from "react";
import "./footer.scss";
import { useTranslation } from "react-i18next";
import { Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

import "./footer.scss";
import emailjs from "@emailjs/browser";
import logo from "../assets/image/logo_sparc.png";
import { useState } from "react";

export const Footer = () => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState("hero");
  const navigate = useNavigate();

  const [openNoti, setOpenNoti] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [loading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

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
  };
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setOpenNoti(true);

    emailjs
      .send(
        "service_pu2tmoe", // Thay bằng Service ID từ EmailJS
        "template_wg53z8k", // Thay bằng Template ID từ EmailJS
        formData,
        "xr4oAtgxCNMk5BWdF" // Thay bằng Public Key từ EmailJS
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsLoading(false);
          setIsSuccess(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            company: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          setIsLoading(false);
          setIsSuccess(false);
        }
      );
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {/* ======= Footer ======= */}
      <footer id="footer" className="footer">
        <div className="footer-content position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-left">
                <div className="logo-title">
                  <div className="footer-title-logo">
                  IOT system for fetal electrocardiogram monitoring with non-contact sensors
                  </div>
                </div>

                {/* <div className="logo-title-partner">
                  <div className="footer-title-logo-partner">ĐỐI TÁC CỦA</div>
                  <img src={meta} className="footer-social" />
                  <img src={tiktok} className="footer-social" />
                  <img src={google} className="footer-social" />
                </div> */}

                <div className="footer-info">
                  <div className="footer-contact-info">
                    <i
                      class="bi bi-geo-alt-fill"
                      style={{ color: "#599aef" }}
                    ></i>
                    <div className="footer-contact-info-tag-name">
                      {t("page.footer.address.line2")}
                    </div>
                  </div>
                  <div className="footer-contact-info-tag-value">
                    {/* {t("page.footer.address.line1")} */}
                    <div>
                    HUST, No. 1 Dai Co Viet street, Hai Ba Trung district , Hanoi, Vietnam
                    </div>
                    
                  </div>
                  <div className="footer-contact-info">
                    <i
                      class="bi bi-telephone-fill"
                      style={{ color: "#599aef" }}
                    ></i>
                    <div className="footer-contact-info-tag-name">
                      {t("page.footer.contact.phone.label")}
                    </div>
                  </div>
                  <div className="footer-contact-info-tag-value">
                    {/* {t("page.footer.contact.phone.value")} */}
                    +84 988968338
                  </div>
                  <div className="footer-contact-info">
                    <i
                      class="bi bi-envelope-open-fill"
                      style={{ color: "#599aef" }}
                    ></i>
                    <div className="footer-contact-info-tag-name">
                      {t("page.footer.contact.email.label")}
                    </div>
                  </div>
                  <div className="footer-contact-info-tag-value">
                    {/* {t("page.footer.contact.email.value")} */}
                    sparc.hust@gmail.com
                  </div>
                </div>

                <div className="footer-info">
                  <div className="social-links d-flex mt-3">
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-twitter" />
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-facebook" />
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-instagram" />
                    </a>
                    <a
                      href="#"
                      className="d-flex align-items-center justify-content-center"
                    >
                      <i className="bi bi-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 footer-links footer-text d-none d-lg-block">
                <h4>{t("page.footer.ourServices.title")}</h4>
                <ul>
                  <li onClick={(e) => handleClickItemMenu(e, "hero")}>
                    <a
                      href="#hero"
                      className={activeItem === "hero" && "active"}
                    >
                      {t("page.header.nav.home")}
                    </a>
                  </li>
                  <li onClick={(e) => handleClickItemMenu(e, "statistic")}>
                    <a
                      href="#statistic"
                      className={activeItem === "statistic" && "active"}
                    >
                      {t("page.header.nav.figure")}
                    </a>
                  </li>
                  <li onClick={(e) => handleClickItemMenu(e, "why-us")}>
                    <a
                      href="#why-us"
                      className={activeItem === "why-us" && "active"}
                    >
                      {t("page.header.nav.why-us")}
                    </a>
                  </li>
                  <li onClick={(e) => handleClickItemMenu(e, "services")}>
                    <a
                      href="#services"
                      className={activeItem === "services" && "active"}
                    >
                      {t("page.header.nav.services")}
                    </a>
                  </li>
                  <li onClick={(e) => handleClickItemMenu(e, "course")}>
                    <a
                      href="#course"
                      className={activeItem === "course" && "active"}
                    >
                      {t("page.header.nav.course")}
                    </a>
                  </li>
                  {/* <li onClick={(e) => handleClickItemMenu(e, "partner")}>
                <a href="#partner" className={activeItem === "partner" && "active"} >{t("page.header.nav.partner")}</a>
              </li> */}

                  <li onClick={(e) => handleClickItemMenu(e, "contact")}>
                    <a
                      href="#contact"
                      className={activeItem === "contact" && "active"}
                    >
                      {t("page.header.nav.contact")}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-4 footer-links">
                <div className="popup-content-footer">
                  <div class="right-side">
                    <h1>CONTACT US</h1>

                    <form class="php-email-form">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="name"
                          placeholder={t("page.contact.form.name")}
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("page.contact.form.email")}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="numeric"
                          class="form-control"
                          name="phone"
                          id="phone-number"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t("page.contact.form.phone")}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="company"
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={t("page.contact.form.company")}
                          required
                        />
                      </div>
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t("page.contact.form.message")}
                          required
                        ></textarea>
                      </div>
                      <div class="text-center">
                        <button
                          type="submit"
                          onClick={sendEmail}
                          className="submit-button"
                        >
                          {t("page.contact.form.send")}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal position-relative">
          <div className="container">
            <div class="row">
              <div className="col-md-6 p-3">
                {t("page.footer.copyright")}
              </div>
              
            </div>
          </div>
        </div>
      </footer>
      <Modal
        show={openNoti}
        onHide={() => setOpenNoti(false)}
        centered
        scrollable
        size="lg"
        className="modal-noti"
      >
        <Modal.Body>
          <div className="noti-content">
            {loading ? (
              <>
                <div class="spinner-border text-primary" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
                <h4>Loading</h4>
              </>
            ) : (
              <>
                {isSuccess ? (
                  <i class="bi bi-check-circle"></i>
                ) : (
                  <i class="bi bi-exclamation-circle"></i>
                )}
                <h4>
                  {isSuccess
                    ? t("page.contact.form.title.success")
                    : t("page.contact.form.title.failed")}
                </h4>
                <p>
                  {isSuccess
                    ? t("page.contact.form.success")
                    : t("page.contact.form.failed")}
                </p>
                <button onClick={() => setOpenNoti(false)}>OK</button>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

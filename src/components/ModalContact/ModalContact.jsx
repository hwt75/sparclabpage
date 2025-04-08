import { Modal } from "react-bootstrap";
import "./index.scss";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ModalContact = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  const [formData,setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  })

  const [openNoti, setOpenNoti] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [loading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsOpen(false);
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
            message: ""
          })
        },
        (error) => {
          console.log("FAILED...", error);
          setIsLoading(false);
          setIsSuccess(false);
        }
      );
  };

  return (
    <>
      <Modal
        show={isOpen}
        onHide={() => setIsOpen(false)}
        centered
        scrollable
        size="lg"
        className="modal-contact"
      >
        <Modal.Body>
          <div className="popup-content row">
            <i class="bi bi-x close-icon" onClick={() => setIsOpen(false)}></i>
            <div class="col-lg-6 left-side">
              <h1>CONTACT US</h1>
              <p className="contact-sub-head">{t("page.contact.subTitle")}</p>
            </div>
            <div class="col-lg-6 right-side">
              <form
                // action="forms/contact.php"
                // method="post"
                // role="form"
                class="php-email-form"
              >
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
                  <button type="submit" onClick={sendEmail}>{t("page.contact.form.send")}</button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
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
            {loading ? 
            <>
              <div class="spinner-border text-primary" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <h4>Loading</h4>
            </>
            : <>
              {isSuccess ? <i class="bi bi-check-circle"></i> : <i class="bi bi-exclamation-circle"></i>}
              <h4>{isSuccess ? t("page.contact.form.title.success") : t("page.contact.form.title.failed")}</h4>
              <p>{isSuccess ? t("page.contact.form.success") : t("page.contact.form.failed")}</p>
              <button onClick={() => setOpenNoti(false)}>OK</button>
            </>
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalContact;

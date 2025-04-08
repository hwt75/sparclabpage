import * as React from "react";
import "./index.scss";
import { useTranslation } from "react-i18next";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
const Home = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-container container">
      <h1>Privacy Policy for Talent Netzwerk</h1>
      <br />
      <p>Talent Netzwerk & Talent Netzwerk Academy</p>
      <p>Last updated in March 2025</p>
      <br />
      <p>Privacy email: <a href="mailto:info@talent-netzwerk.org">info@talent-netzwerk.org</a></p>
      <br/>

      <h5>1. Introduction</h5>
      <p>Service is provided by Talent Netzwerk. This page is to inform website visitors about our policies regarding the collection, use, and disclosure of data if someone decides to use our Service. </p>
      <br />

      <h5>2. Information we collect</h5>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details.</li>
        <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and browsing behavior.</li>
        <li>Education and employment data</li>
      </ul>
      <br />

      <h5>3. How we use your information</h5>
      <p>We use the information we collect to:</p>
        <ul>
          <li>Provide and maintain our services.</li>
          <li>Respond to inquiries and communicate with users.</li>
          <li>Improve our website and services.</li>
          <li>Send promotional materials, with your consent.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      <br />

      <h5>4. Sharing Your Information</h5>
      <p>We do not sell, rent, or trade your personal information. We may share your information with third parties in the following situations:</p>
      <ul>
        <li>With service providers that help us operate our website.</li>
        <li>When required by law or to protect our rights.</li>
        <li>With your consent.</li>
      </ul>
      <br />

      <h5>5. Data Security</h5>
      <p>We implement appropriate technical and organizational measures to protect your information from unauthorized access, loss, or misuse.</p>
      <br />


      <h5>6. Your Rights</h5>
      <p>You have the following rights regarding your personal information:</p>
      <ul>
        <li>Access, correct, or delete your data.</li>
        <li>Object to processing or request data portability.</li>
        <li>Withdraw your consent at any time.</li>
      </ul>
      <p>To exercise these rights, please contact us at info@talent-netzwerk.org.</p>
      <br />

      <h5>7. Cookies</h5>
      <p>Our website uses cookies to improve user experience. You can control cookie settings through your browser preferences.</p>
      <br />

      <h5>8. Illegal or Copyrighted Content</h5>
      <p>If any image or content displayed on our website violates copyright laws or is deemed illegal, please contact us immediately at [email address]. We will review the request and remove the infringing content without delay.</p>
      <br />

      <h5>9. Changes to This Policy</h5>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>
      <br />

      <h5>10. Contact Us</h5>
      <p>Talent Netzwerk & Talent Netzwerk Academy</p>
      <p>Phone: +49 176 879 80845</p>
      <p>Privacy email: <a href="mailto:info@talent-netzwerk.org">info@talent-netzwerk.org</a></p>
      <p>Address: 12/441 Thien Loi, Hai Phong, 184300 Vietnam</p>
    </div>
  );
};

export const PrivacyPage = Home;

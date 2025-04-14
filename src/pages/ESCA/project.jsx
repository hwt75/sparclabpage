import AOS from "aos";
import heroCarousel5 from "../../assets/image/hero-carousel-5.jpg";
import systemImage2 from "../../assets/image/ESCA_System_1.png";
import systemImage3 from "../../assets/image/ESCA_System_2.png";
import systemImage4 from "../../assets/image/ESCA_System_3.png";

import "./index.scss";

export const ProjectESCAPage = () => {
  AOS.init({ once: true });

  return (
    <>
      <div
        class="breadcrumbs d-flex align-items-center"
        style={{ backgroundImage: `url(${heroCarousel5})` }}
      >
        <div
          class="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2>SPARC Lab</h2>
        </div>
      </div>
      <div className="project-container container">
        <h2>Project ESCA</h2>
        <h5>1. About the project</h5>
        <p>
          The D-ESCA3 (Environmental Sound Collection and Analysis) project aims
          to develop a robust system capable of detecting abnormal audio events
          in real time.
        </p>
        <div className="img-box">
          {/* <img src={systemImage1} alt="project" /> */}
        </div>
        <ul>
          <li>「VOICE-IP TERMINAL2」：</li>
          <p>
            Performs on-site environmental sound collection, A/D conversion, and
            data transfer.{" "}
          </p>
          <li>「AI-NETWORK TERMINAL for D-ESCA 」：</li>
          <p>
            Transfer learning/additional learning (re-learning), real-time DL
            inference, and operation are performed on-site.
          </p>
          <li>「PC/Server at SIST」：</li>
          <p>Train and deploy basic models of neural networks.</p>
        </ul>
        <br />
        <h5>2. Modeling the system</h5>
        <br />
        <div className="img-box">
          <img src={systemImage2} alt="project" />
        </div>
        <h5>3. The Cloud computing</h5>
        <p>
          It allows users to easily operate Data/NeuralNet/Hyper-Parameter by
          connecting to CDLT and perform deep learning learning through Deep
          Learning Lib. Data processing history, model creation history, and
          learning status/results are stored in an external storage/database,
          and can be displayed or downloaded if needed.
        </p>
        <br />
        <div className="img-box">
          <img src={systemImage3} alt="project" />
        </div>
        <br />
        <h5>4. Data flow</h5>
        <br />
        <div className="img-box">
          <img src={systemImage4} alt="project" />
        </div>
        <h5>5. Categories</h5>
        <ul>
          <li>Jetson Xavier NX</li>
          <li>Jetson Nano</li>
          <li>Jetson Orin Nano</li>
          <li>Raspberry Pi 4</li>
        </ul>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Spec</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A</td>
              <td>
                <ul>
                  <li>Raspberry Pi 4</li>
                  <p>o	1.8GHz quad-core 64-bit ARM Cortex-A72 (ARM v8) CPU</p>
                  <p>o	1GB, 2GB, 4GB or 8GB LPDDR4</p>
                  <p>o	2.4 GHz and 5.0 GHz IEEE 802.11ac wireless LAN</p>
                  <li>(option) DQ1 (ThinQ ON V2, if available)</li>
                  <p>o	1GHz quad-core 64-bit ARM Cortex-A53 CPU</p>
                </ul>
              </td>
              <td>Core function, Inference</td>
            </tr>
            <tr>
              <td>B</td>
              <td>
                <ul>
                  <li>NVIDIA Jetson Orin Nano</li>
                  <p>o	1.7GHz 6-core 64-bit ARM Cortex-A78AE v8.2 CPU</p>
                  <p>o	4GB LPDDR4</p>
                  <p>o	34 TOPS</p>
                  <p>o	Display, touchscreen</p>
                </ul>
              </td>
              <td>Core function + Transfer Learning</td>
            </tr>
            <tr>
              <td>C</td>
              <td><ul>
                <li>NVIDIA Jetson Orin Nano</li>  
                <p>o	1.7GHz 6-core 64-bit ARM Cortex-A78AE v8.2 CPU</p>
                <p>o	8GB 128-bit LPDDR5</p>
                <p>o	34 TOPS</p>
                <p>o	Display, touchscreen</p>
              </ul></td>
              <td>Core function + Transfer Learning + Base training</td>
            </tr>
            <tr>
              <td>D</td>
              <td>General Computer (PC ỏ Cloud Server)</td>
              <td>Database + Monitor </td>
            </tr>
          </tbody>
        </table>
        <h5>6. Members</h5>
        <p>Tsukasa Okabe </p>
        <p>Akira Wada – Project Manager </p>
        <p>Tsukasa Okabe – Project Manager</p>
        <p>Ph. D. Huy-Dung Han – Data Scientist</p>
        <p>Truong-Giang Phung – Software Architect, Graphic Engineer</p>
        <p>Hai-Minh Nguyen – Embedded Software Developer</p>
        <p>Minh-Hoang Nguyen – Artificial Intelligence Engineer</p>
        <p>Trong-Thanh Ho – Artificial Intelligence Engineer</p>
        <p>Thinh-Quang Nguyen - Artificial Intelligence Engineer</p>
        <br />
      </div>
    </>
  );
};

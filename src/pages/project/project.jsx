import AOS from "aos";
import heroCarousel5 from "../../assets/image/hero-carousel-5.jpg";
import "./index.scss";

export const ProjectPage = () => {
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
        <h2>Project ABC</h2>
        <div className="img-box">
            <img src={heroCarousel5} alt="project"/>
        </div>

        <h5>1. Introduction</h5>
        <p>
          Service is provided by Talent Netzwerk. This page is to inform website
          visitors about our policies regarding the collection, use, and
          disclosure of data if someone decides to use our Service.{" "}
        </p>
        <br />
      </div>
    </>
  );
};

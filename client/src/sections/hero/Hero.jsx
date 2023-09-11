import "./Hero.css";
import photor from "../../assets/mark tuan.jpeg";
import { NavLink } from "react-router-dom";
function Hero() {
  return (
    <div className="container-fluid herobg-color text-white">
      <div className="container col-xxl-8 px-4 py-2 ">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className={"col-10 col-sm-8 col-lg-6"}>
            <img
              src={photor}
              className="d-block mx-lg-auto  heroimg"
              alt="Bootstrap Themes"
              width="300"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-5">
              Unity Creative Studios
            </h1>
            <p className="lead mb-4">
              Discover the Ultimate Music Studio Experience. Where Creativity
              Meets Precision: "Explore Our Music Studio Today."
            </p>
            <div className="d-grid gap-3  d-md-flex justify-content-md-start">
              <NavLink
                to="/pricing"
                className="btn bookbtcolor btn-lg px-4 me-md-2"
              >
                Book Now
              </NavLink>
              <NavLink
                to="/projects"
                className="btn btn-outline-secondary btn-lg px-4 btn text-white btn-lg px-4"
              >
                Explore Projects
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

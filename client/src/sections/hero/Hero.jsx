import "./Hero.css";
/* import photor from "http://localhost:3000/assets/marktuan.jpeg"; */
import { NavLink } from "react-router-dom";
function Hero() {
  return (
    <div className="container-fluid herobg-color text-white custom-pad">
      
        <div className="align-items-center g-5 py-5  d-flex flex-row justify-content-between">
         
          <div className="">
            <h1 className="display-5 fw-bold lh-1 mb-5">
              Unity Creative Studios
            </h1>
            <p className="lead mb-4">
              Discover the Ultimate Music Studio Experience.
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

          <div className={""}>
            <img
              src="assets/marktuan.jpeg"
              className="d-block mx-lg-auto  heroimg"
              alt="Bootstrap Themes"
              width="400"
              height="440"
              loading="lazy"
            />
          </div>
        </div>
      </div>
   
  );
}

export default Hero;

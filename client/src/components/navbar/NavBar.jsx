import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar({ adminnavbar }) {
  const AdminNavBar = () => {
    return <div className="">hello Navbar admin</div>;
  };

  const HomeNavBar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
          <div className="container">
            <NavLink to="/" className="navbar-brand">
              {" "}
              Unity Studios{" "}
            </NavLink>

            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/projects">
                    Projects
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#1"
                    role="button"
                    data-bs-toggle="dropdown"
                  >
                    Coures
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink className="courses" to="/mix-master">
                        Mix and Master
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="courses" to="production">
                        Production
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/pricing">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <NavLink className="btn  signup" to="/singin">
                  Sign up
                </NavLink>
                <NavLink className="btn  ms-2 colo" to="/singin">
                  Login
                </NavLink>
                <div className="dropdown">
                  <NavLink to="/checkout">
                    <i className="bi bi-cart cart"></i>
                  </NavLink>
                  
                  <div className="dropdown-content bg-dark text-white">
                    <p>Cart is empty</p><br />
                    {/* <p>When you add somthing it will appear here</p> */}
                  </div>
                </div>
                
              </form>
            </div>
          </div>
        </nav>

        {/* <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <h2>Animated Sidenav Example</h2>
      <p>Click on the element below to open the side navigation menu.</p>
      <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776; open</span> */}
      </div>
    );
  };
  return <>{adminnavbar ? <AdminNavBar /> : <HomeNavBar />}</>;
}

export default NavBar;

import './Footer.css';
function Footer({adminFooter}) {
  const AdminFooter = () => {
    return (
      <div className="p-5">
        hello Footer admin
      </div>
    );
  };

  const HomeFooter = () => {
    return (
      <div className="container-fluid bg-footer-color" >
      {/* Footer */}
      <div className="text-center text-lg-start text-white" >
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section>
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Unity Studios</h6>
                <p>
                  <a href="#" className="text-white">Projects</a>
                </p>
                <p>
                  <a href="#" className="text-white">Pricing</a>
                </p>
                <p>
                  <a href="#" className="text-white">About us</a>
                </p>
                <p>
                  <a href="#" className="text-white">Contact us</a>
                </p>
              </div>
              {/* Grid column */}

              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                <p>
                  <a href="#" className="text-white">Mics</a>
                </p>
                <p>
                  <a href="#" className="text-white">Speakers</a>
                </p>
                <p>
                  <a href="#" className="text-white">Lights</a>
                </p>
                <p>
                  <a href="#" className="text-white">Chair</a>
                </p>
              </div>
              {/* Grid column */}

              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Projects</h6>
                <p>
                  <a href="#" className="text-white">Tracks</a>
                </p>
                <p>
                  <a href="#" className="text-white">Beats</a>
                </p>
             
              </div>

              {/* Grid column */}
              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Cairo, Madi</p>
                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </section>
          {/* Section: Links */}

          <hr className="my-3" />

          {/* Section: Copyright */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                {/* Copyright */}
                <div className="p-3">
                  © 2023 Copyright:
                  <a className="text-white" href="#1">Unity Studios</a>
                  
                </div>
                {/* Copyright */}
              </div>
              {/* Grid column */}

              {/* Grid column */}
              
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* Social Media Icons */}  
                <a href="mailto:ozone.studios.o3@gmail.com" className="btn btn-outline-light btn-floating m-1"><i className="bi bi-envelope"></i></a>
                <a href="https://www.instagram.com/ozone3.studios/?igshid=MWZjMTM2ODFkZg%3D%3D" className="btn btn-outline-light btn-floating m-1"><i className="bi bi-instagram"></i></a>
                <a href="https://www.tiktok.com/@ozone.studios?_t=8fKqYRVh59B&_r=1" className="btn btn-outline-light btn-floating m-1"><i className="bi bi-tiktok"></i></a>
                <a href="https://open.spotify.com/playlist/6R3mDubv7PPcmT9GyriqRh?si=hcaPCt_4TDiIvO7TEOYgPQ " className="btn btn-outline-light btn-floating m-1"><i className="bi bi-spotify"></i></a>
                <a href="https://www.google.com/maps?q=Ozone+Studios,+Al+Basatin+Al+Gharbeyah,+El+Basatin,+Cairo+Governorate+4234205+New,+Maadi,+Cairo+Governorate+11728&ftid=0x145839f84437301f:0xb4717a33e37f30e&hl=en&gl=us&entry=gps&lucs=,47071704&g_ep=CAISBjYuNzkuMxgAINeCAyoJLDQ3MDcxNzA0QgJFRw%3D%3D&g_st=ic" className="btn btn-outline-light btn-floating m-1"><i className="bi bi-geo-alt"></i></a>
              </div>
              {/* Grid column */}
            </div>
          </section>
          {/* Section: Copyright */}
        </div>
        {/* Grid container */}
      </div>
      {/* Footer */}
    </div>
    /* End of .container-fluid */
    );
  };
  return (
    <>
      {adminFooter ? <AdminFooter /> : <HomeFooter />}
    </>
    
  );
}

export default Footer;

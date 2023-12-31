import './Contact.css';

function Contact() {
  return (
    <div className="contact-fluid font p-5  ">

    <div className="container">
      <div className="row">
        <div className="col-md-5 mr-auto text-white">
          <h2>Contact Us</h2>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quaerat autem corrupti asperiores accusantium et fuga! Facere excepturi, quo eos, nobis doloremque dolor labore expedita illum iusto, aut repellat fuga!</p>

          <ul className="list-unstyled pl-md-5 mb-5">
            <li className="d-flex mb-2">
              <span className="mr-3 text-white"><span className="icon-map"></span></span> 34 Street Name, City Name Here, <br /> United States
            </li>
            <li className="d-flex  mb-2"><span className="mr-3"><span className="icon-phone"></span></span> +1 (222) 345 6789</li>
            <li className="d-flex"><span className="mr-3"><span className="icon-envelope-o"></span></span> info@mywebsite.com</li>
          </ul>
        </div>

        <div className="col-md-6">
          <form className="mb-5" method="post" id="contactForm" name="contactForm">
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="name" className="col-form-label">Name</label>
                <input type="text" className="form-control" name="name" id="name" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="email" className="col-form-label">Email</label>
                <input type="text" className="form-control" name="email" id="email" />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 form-group">
                <label htmlFor="message" className="col-form-label">Message</label>
                <textarea className="form-control" name="message" id="message" cols="30" rows="7"></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <input type="submit" value="Send Message" className="btn btn-primary rounded-0 py-2 px-4 mt-3" />
                <span className="submitting"></span>
              </div>
            </div>
          </form>

          <div id="form-message-warning mt-4"></div>
          <div id="form-message-success">
            Your message was sent, thank you!
          </div>
        </div>
      </div>
    </div>
    </div>
  );
  
}

export default Contact
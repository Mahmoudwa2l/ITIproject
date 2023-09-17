import "./Pricing.css";
import PricingCard from "../../components/pricingCard/PricingCard";
import { NavLink } from "react-router-dom";
function Pricing() {
  return (
    <div className="container-fluid pricing-bg p-5">
      <div className="container-fluid custom-pad text-white d-flex flex-column">
        
        <div className="h1 p-5 text-center">A perfect fit for every one</div>


        <div className="row ">
          
            <div className=" col-md-4 col-sm-12 ">
                <PricingCard title={"Beginner"}/>
            </div>
            <div className="col-md-4 col-sm-12">
                <PricingCard title={"Pro"}/>
            </div>
            <div className="col-md-4 col-sm-12">
                <PricingCard  title={"Advanced"}/>
            </div>
            
           
        </div>
        <div className=" text-center  ">
          <NavLink to='/pricing' onClick={ ()=> window.scrollTo(0, 0)} className='text-white learnmore'>Learn More</NavLink>
            {/* <button onClick={()=>{HandleGoProjectsPage()}} className="learnmore">Learn More</button> */}
        </div>
            
      </div>
    </div>
  );
}

export default Pricing;

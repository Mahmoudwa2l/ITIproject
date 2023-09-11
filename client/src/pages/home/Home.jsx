import React from "react";
import Beats from "../../sections/beats/Beats";
import {
  Hero,
  Projects,
  Pricing,
  Features,
  About,
  Contact,
  
} from "../../sections/index";

function Home({adminhome}) {


  const AdminHome = () => {
    return (
      <div className="main">
        Hello home
        
        
       
      </div>
    );
  };

  const UserHome = () => {
    return (
      <>
    
      <Hero />
      <Projects />
      <Pricing />
      <Beats />
      <Features />
      <About />
      <Contact />
     
    </>
    );
  };
  return (
    <>
      {adminhome ? <AdminHome /> : <UserHome />}
    </>
  );
}

export default Home;

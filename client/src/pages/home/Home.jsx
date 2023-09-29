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

function Home() {
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
}

export default Home;

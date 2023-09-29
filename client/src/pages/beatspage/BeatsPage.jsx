import "./BeatsPage.css";

import { BeatsCard, BeatsCardListed } from "../../components/index";

import React, { useEffect, useState } from "react";
import axios from "axios";

function BeatsPage() {
  const [currentView, setCurrentView] = useState("list");
  const [beats,setBeats] = useState([])

  useEffect(()=>{
    const fetchBeats = async ()=>{
      const res = await axios.get("beats");
      console.log(res.data);
      setBeats(res.data)
    };
    fetchBeats();
  },[])
  const ListProject = () => {
    return (
      <div className="row">
        <div className="d-flex flex-column">
          {beats.map((b) => (
            <BeatsCardListed key={b._id} beats={b} />
          ))}


        </div>
      </div>
    );
  };

  const WrapProject = () => {
    return (
      <>
        <div className="row">
          <div className="col-md-4 col-lg custommargin d-grid gridmusic food mt-5">
            {beats.map((b) => (
              <div className="card musiccardwidth2 ">
                <BeatsCard beats={b} />
              </div>
            ))}


          </div>
        </div>
      </>
    );
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <>
      <div className="container-fluid project-bg pt-5">
        <div className="container-sm d-flex flex-column ">
          <div className="h1 text-center text-white mb-4">Beats</div>

          <div className="filter d-flex flex-row justify-content-between text-white">
            <div className="filterbut">
              <span className="bi bi-filter bg-color"> More Filters</span>
            </div>

            <div className="view d-flex flex-row justify-content-center align-items-center">
              <div
                className={`bi bi-list list ms-3 ${
                  currentView === "list" ? "active" : ""
                }`}
                onClick={() => handleViewChange("list")}
              ></div>
              <div
                className={`bi bi-grid-fill list ${
                  currentView === "grid" ? "active" : ""
                }`}
                onClick={() => handleViewChange("grid")}
              ></div>
            </div>
          </div>
          {currentView === "list" ? <ListProject /> : <WrapProject />}
        </div>
      </div>
    </>
  );
}

export default BeatsPage;

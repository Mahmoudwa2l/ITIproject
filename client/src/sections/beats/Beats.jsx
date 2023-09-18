import './Beats.css';
import { BeatsCard  } from '../../components/index';
/* import { beats } from "../../data/beats"; */
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import React, { useState } from 'react';
import {Cart} from '../../pages/index';

import axios from "axios";
function Beats() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [location]);

  const [beats,setBeats] = useState([])

  useEffect(()=>{
    const fetchBeats = async ()=>{
      const res = await axios.get("beats");
      console.log(res.data);
      setBeats(res.data)
    };
    fetchBeats();
  },[])
 const [cart, setCart] = useState([]);

  const addToCart = (beats) => {
    setCart([...cart, beats]);
  };

  return (
    <div className=" bg-dark custom-beats-bg pb-5 pt-5">
      <div className="container-fluid custom-pad">
        <div className="text-white d-flex justify-content-between">
          <h1 className=" mb-2">Beats</h1>
          <NavLink to='/beats' className='text-white learnmore'>See More</NavLink>
        </div>

        <div className="container-lg scrollmenu">
          {beats.map((b) => (
            <div className="card musiccardwidth1">
              <BeatsCard key={b.id} beats={b}  addToCart={addToCart} />
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
}

export default Beats;

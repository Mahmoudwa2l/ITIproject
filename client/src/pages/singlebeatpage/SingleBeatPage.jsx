import "./SingleBeatPage.css";
import { BeatsCard  } from '../../components/index';
import { useEffect ,useState } from 'react';
import axios from "axios";
function SingleBeatPage() {
    const [beats,setBeats] = useState([])

  useEffect(()=>{
    const fetchBeats = async ()=>{
      const res = await axios.get("beats");
      console.log(res.data);
      setBeats(res.data)
    };
    fetchBeats();
  },[])
  return (
    <div className="contaier-fluid custom-pad pt-4 wrapper1">
      <div className="leftbeatinfo text-center">
        <img className ="imagesingle" src="assets/MATADOR.png" alt="" />
    </div>

      <div className="rightbeatinfo">
        <div className="info1">
            <div className="d-flex flex-row justify-content-between align-items-center">
              <h4>Producer</h4>
              <div className="d-flex flex-row align-items-center">
                <h4 className="me-3">price</h4>
                <div className="cart btn text-white bg-primary d-flex flex-row align-items-center">
                  <i class="bi bi-cart-plus-fill me-2"></i>
                  <h4 className="fs-5 mt-2">Add to Cart</h4>

                </div>

              </div>
            </div>
        </div>
        <div className="info2">
            <h4>Licensing</h4>
        </div>


        <div className="info3">

            <h2 className="titleinfo3">Explore More Beats</h2>
            <div className="container-lg scrollmenu">
            {beats.map((b) => (
                <div className="card musiccardwidth1">
                <BeatsCard key={b.id} beats={b} />
                </div>
            ))}
            </div>

        </div>
      </div>
    </div>
  );
}

export default SingleBeatPage;

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
        <h4>test 1</h4>
    </div>

      <div className="rightbeatinfo">
        <div className="info1">
            <h4>Producer</h4>
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

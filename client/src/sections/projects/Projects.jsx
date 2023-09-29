import "./Projects.css";
import { NavLink } from "react-router-dom";
import {MusicCard} from '../../components/index';
import { tracks } from "../../data/tracks";
function Projects() {
  return (
    <div className=" bg-dark custom-gradient-bg pb-5 pt-5">
      <div className="container-fluid custom-pad">
        <div className="text-white d-flex justify-content-between">
          <h1 className=" mb-2">Projects</h1>
          
          <NavLink to='/projects' className='seemore'>see more</NavLink>
        </div>

        <div className="container-lg scrollmenu">
  {tracks.map((t) => (
    <div className="card musiccardwidth1 ms-2 mt-2" key={t.id}> {/* Replace 'id' with the actual unique identifier in your data */}
      <MusicCard track={t} />
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default Projects;

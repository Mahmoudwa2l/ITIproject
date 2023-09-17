import './Features.css'
import { ServiceCard } from '../../components/index'
function Features() {
  return (
    <div className="container-fluid fbg text-white custom-pad">

    <div className="container-fluid  px-4 py-5" id="featured-3">
      <h1 className="pb-2 text-center">Our Services</h1>
      <div className="row g-5 py-5 row-cols-1 row-cols-lg-3">
        <ServiceCard 
          title={'Record'} 
          para=
          {
            'Paragraph of text beneath the heading to explain the heading. We all add onto it with another sentence and probably just keep going until we run out of words.'
          } 
          myClassName={'bi bi-record-circle'}
        />
        <ServiceCard 
          title={'Mix and Master'} 
          para=
          {
            'Paragraph of text beneath the heading to explain the heading. We all add onto it with another sentence and probably just keep going until we run out of words.'
          } 
          myClassName={'bi bi-vinyl'}
        />
        <ServiceCard 
          title={'Beats'} 
          para=
          {
            'Paragraph of text beneath the heading to explain the heading. We all add onto it with another sentence and probably just keep going until we run out of words.'
          } 
          myClassName={'bi bi-music-note'}
        />
      
      </div>
    </div>
    </div>
  )
}

export default Features
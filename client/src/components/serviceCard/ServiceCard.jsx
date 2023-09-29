import './ServiceCard.css';

function ServiceCard(props) {
  return (
    <div className="feature col text">
          <div className="feature-icon bg-primary bg-gradient">
          <i className={` icon ${props.myClassName}`}></i>
          </div>
          <h3>{props.title}</h3>
          <p className='para'>
            {props.para}
          </p>
        </div>
  )
}

export default ServiceCard
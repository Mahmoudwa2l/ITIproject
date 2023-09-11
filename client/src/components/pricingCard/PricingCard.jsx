import './PricingCard.css';

function PricingCard(props) {
  return (
    <div className='card card-color mb-3'>
      <div className="card-body pricing-bg text-white">
        <h2 className="card-title text-left mb-4">{props.title}</h2>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#1" className="btn btn-color btn-p mt-3 mb-3">
          Book Now
        </a>
      </div>
    </div>
  );
}

export default PricingCard;

import './offer.css';
import { Link } from 'react-router-dom';
import OfferItem from '../OfferItem/OfferItem';
import { getOffer } from '../../assets/offer-list';
import uniqid from 'uniqid';

const offerList = getOffer();

function Offer() {
  return (
    <div className="offer-container">
        {offerList.map(car => 
        <Link to={`/shop/${car.id}`}>
            <OfferItem image={car.image} name={car.name} engine={car.engine} fuel={car.fuel} price={car.price} id={car.id} key={uniqid()} />
        </Link>
        )}
    </div>
  );
}

export default Offer;

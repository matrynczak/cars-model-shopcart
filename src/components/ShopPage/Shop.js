import './shop.css';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';

function Shop({quantity, offer}) {

  return (
    <div className="shop-container">
        <Header quantity={quantity} />
        <Offer offer={offer} />
    </div>
  );
}

export default Shop;

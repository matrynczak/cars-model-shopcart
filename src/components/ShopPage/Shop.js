import './shop.css';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';

function Shop({quantity}) {

  return (
    <div className="shop-container">
        <Header quantity={quantity}/>
        <Offer />
    </div>
  );
}

export default Shop;

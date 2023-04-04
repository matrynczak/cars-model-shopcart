import './offerItemPage.css';
import { getOffer } from '../../assets/offer-list';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';

// const offerList = getOffer();

function OfferItemPage({quantity, handleCart, offer}) {

  const  params = useParams();
  const [itemsAmount, setItemsAmount] = useState(0);
  const [items, setItems] = useState([]);

  const selectedCar = offer.find(car => params.id === car.id);

  const handlePlusMinusButtons = (event) => {
    const buttonText = event.target.innerText;
    if(buttonText === '+') {
        setItemsAmount(itemsAmount + 1);
    }
    else {
        setItemsAmount(itemsAmount - 1);
    }
  }

  const handleAddItemsToCart = () => {
    const car = {
        id: selectedCar.id,
        image: selectedCar.image,
        name: selectedCar.name,
        price: selectedCar.price
    };
    for(let i=0; i<itemsAmount; i++) {
        setItems(items.push(car))
    }    
    handleCart(items);
  }

  useEffect(() => {
    setItems([])
  }, [quantity])
  
  return (
    <div className="item-page-container">
        <Header quantity={quantity}/>
        <div className="item-page-content">
        <img id="item-page-image" src={require(`../../assets/${selectedCar.image}`)}/>
        <div className='item-page-description'>
            <h3 id="item-title">{selectedCar.name}</h3>
            <p id="item-attr">
                <span id="engine">Engine: {selectedCar.engine}</span>
                <span id="fuel">Fuel type: {selectedCar.fuel}</span>
                <span id="price">Price: {selectedCar.price} Euro</span>
                <span id="description">{selectedCar.description}</span>
            </p>
            <div className='add-to-cart-section'>
                <button className='add-quantity' onClick={handlePlusMinusButtons}>-</button>
                <input className='item-quantity' 
                    type="number"
                    value={`${itemsAmount}`}
                    min="1"
                    max="50"></input>
                <button className='add-quantity' onClick={handlePlusMinusButtons}>+</button> 
                <button className='add-to-cart-button' onClick={() => handleAddItemsToCart()}>Add to cart</button> 
            </div>
            
        </div>
    </div>
    </div>
    
  );
}

export default OfferItemPage;

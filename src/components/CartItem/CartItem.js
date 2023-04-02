import './cartItem.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CartItem({image, name, price, quantity, id, cartItems, handleCart}) {
    const car = cartItems.find(car => car.id === id);
    const carOccurenceInCart = cartItems.filter(car => car.id === id).length;

    const [itemsAmount, setItemsAmount] = useState(carOccurenceInCart);
    const [items, setItems] = useState([]);

    const handlePlusMinusButtons = (event) => {
        const buttonText = event.target.innerText;
        if(buttonText === '+') {
            setItemsAmount(itemsAmount + 1);
            handleItemsChangeInCart(itemsAmount+1)
        }
        else {
            setItemsAmount(itemsAmount - 1);
            handleItemsChangeInCart(itemsAmount-1)
        }
    }

    const handleItemsChangeInCart = (carsAmount) => {
        const item = {
            id: car.id,
            image: car.image,
            name: car.name,
            price: car.price
        };
        if(carsAmount>=carOccurenceInCart){
            setItems(items.push(item));
        }
        else {
            const index = cartItems.indexOf(car);
            setItems(cartItems.splice(index, 1));
        }
        handleCart(items);
      }

    const removeAllCars = () => {
        const index = cartItems.indexOf(car);
        setItems(cartItems.splice(index, carOccurenceInCart));
        handleCart(items);
    }  

      useEffect(() => {
        setItemsAmount(carOccurenceInCart)
        setItems([])
      }, [quantity])

  return (
        <div className="cart-item-container">
            <Link to={`/shop/${id}`}>
                <img id="cart-item-image" src={require(`../../assets/${image}`)}/>
                <div className='cart-item-desc'>
                <h4>{name}</h4>
                <h5>{price} Euro</h5>
                <p>Quantity: {quantity}</p>
                </div>
            </Link>
                <div className='add-to-cart-section'>
                <button className='add-quantity' onClick={handlePlusMinusButtons}>-</button>
                <input className='item-quantity' 
                    type="number"
                    value={`${carOccurenceInCart}`}
                    min="1"
                    max="50"></input>
                <button className='add-quantity' onClick={handlePlusMinusButtons}>+</button>
                <img className='trash-button' src={require(`../../assets/trash.png`)} onClick={removeAllCars}></img> 
            </div>
        </div>
  );
}

export default CartItem;
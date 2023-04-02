import './cartPage.css';
import Header from '../Header/Header';
import CartItem from '../CartItem/CartItem';
import uniqid from 'uniqid';


function CartPage({quantity, cartItems, handleCart, clearCart}) {

  const groupBy = (objectArray, property) => {
    return objectArray.reduce((acc, obj) => {
        const key = obj[property];
        const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
    }, []);
  }

  const groupedCars = groupBy(cartItems, "id");

  const orderedGroupedCars = Object.values(groupedCars);
  const itemsCartWithQuantity = orderedGroupedCars.map(item => {
    return {
        quantity: item.length,
        car: item[0]
    }
  })

  const itemsCartWithQuantitySorted = itemsCartWithQuantity.sort(function(item1, item2){
    if(item1.car.name < item2.car.name) { return -1; }
    if(item1.car.name > item2.car.name) { return 1; }
    return 0;
})

  return (
    <div className="cart-page-container">
        <Header quantity={quantity}/>
        <div class="cart-page-wrapper">
            <ul className='cart-list'>
                <div className="cart-page-content">
                    <h3 className='cart-title'>YOUR CART</h3>
                    {itemsCartWithQuantitySorted.map(item => 
                        <CartItem image={item.car.image} name={item.car.name} price={item.car.price} quantity={item.quantity} id={item.car.id} cartItems={cartItems} handleCart={handleCart} key={uniqid()}/>,
                    )}
                </div>
            </ul>
            <button className='clear-cart' onClick={clearCart}>CLEAR CART</button>
            <div className='checkout-button-wrapper'>
                <button className='checkout-button'>CHECKOUT</button> 
            </div> 
        </div>
    </div>
    
  );
}

export default CartPage;

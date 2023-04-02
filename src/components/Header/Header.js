import './header.css';
import { Link } from 'react-router-dom';

function Header({quantity}) {

  return (
    <div className="header-container">
        <nav>
            <div id="logo">LOGO</div>
            <ul id="nav-items">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/">
                    <li>About</li>
                </Link>
                <Link to="/cart">
                <li id="header-cart">
                    Cart
                    {
                    quantity>0 ? 
                    <div className='total-cart-items'>{quantity}</div> 
                    : <img id= "cart-icon" src={require("../../assets/cart-icon.jpeg")}/>
                    }
                </li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Header;

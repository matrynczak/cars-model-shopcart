import './homepage.css';
import { Link, withRouter } from 'react-router-dom';

function Homepage() {
  return (
    <div className="homepage-container">
      <div id="home-desc-container">
        <h1 id="home-title">YOUR VIRTUAL CAR SHOP</h1>
        <h3 id="home-desc">
          Go and browse the cars which you always wanted to have! They are still waiting for you. 
          Who knows, maybe you would start tomorrow with your brand new vehicle!
          Of course don't forget - there are only models of real cars...
          ¯\_( ツ )_/¯
        </h3>
      </div>   
      <Link to="/shop">
        <button id="home-shop-button">Let's shop!</button>
      </Link>
    </div>
  );
}

export default Homepage;

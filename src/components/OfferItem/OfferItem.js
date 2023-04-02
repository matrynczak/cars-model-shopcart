import './offerItem.css';

function OfferItem({image, name, engine, fuel, price, id}) {
  return (
        <div className="item-container" id={id}>
            <img id="item-image" src={require(`../../assets/${image}`)}/>
                <div className='item-description'>
                <h3 id="item-title">{name}</h3>
                <p id="item-attr">
                    <span id="engine">▪ {engine}</span>
                    <span id="fuel">▪ {fuel}</span>
                    <span id="price">▪ {price} Euro</span>
                </p>
            </div>
        </div>
  );
}

export default OfferItem;

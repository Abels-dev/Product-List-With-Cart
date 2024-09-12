import { useGlobalContext } from "../context";

const Cards = () => {
   const { cards, addToCart, decreaseQuantity, increaseQuantity } =
      useGlobalContext();
   const allCards = cards.map((card, index) => {
      const addCart = (
         <div className="addCart" onClick={() => addToCart(index)}>
            <img src={"/images/icon-add-to-cart.svg"} alt="cart" />
            <p>Add to Cart</p>
         </div>
      );
      const orderedQuantity = (
         <div className="quantity">
            <button onClick={() => decreaseQuantity(index)}>
               <img src="/images/icon-decrement-quantity.svg" alt="minus" />
            </button>
            <p className="orderedQuantity">{card.quantity}</p>
            <button onClick={() => increaseQuantity(index)}>
               <img src="/images/icon-increment-quantity.svg" alt="plus" />
            </button>
         </div>
      );
      return (
         <div className="card" key={index}>
            <img
               src={card.image.desktop}
               alt="food-img"
               className="foodImg desktop-image"
            />
            <img
               src={card.image.mobile}
               alt="food-img"
               className="foodImg mobile-image"
            />
            {card.isAdded ? orderedQuantity : addCart}
            <div className="description">
               <p className="product-Catagory">{card.category}</p>
               <h2>{card.name}</h2>
               <p className="price">${card.price}</p>
            </div>
         </div>
      );
   });

   return <>{allCards}</>;
};

export default Cards;

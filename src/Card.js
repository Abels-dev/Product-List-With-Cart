import React from "react";

const Card = (props) => {
   const addCart = (
      <div className="addCart" onClick={props.addToCart}>
         <img src={"/images/icon-add-to-cart.svg"} alt="cart" />
         <p>Add to Cart</p>
      </div>
   );
   const orderedQuantity = (
      <div className="quantity">
         <button onClick={props.decreaseQuantity}>
            <img src="/images/icon-decrement-quantity.svg" alt="minus" />
         </button>
         <p className="orderedQuantity">{props.product.quantity}</p>
         <button onClick={props.increaseQuantity}>
            <img src="/images/icon-increment-quantity.svg" alt="plus" />
         </button>
      </div>
   );
   return (
      <div className="card">
         <img src={props.product.image.desktop} alt="food-img" className={` foodImg desktop-image ${props.isAdded?"card-select":""}`}/>
         <img src={props.product.image.mobile} alt="food-img" className={`foodImg mobile-image ${props.isAdded?"card-select":""}`} />
         {props.isAdded?orderedQuantity:addCart}
         <div className="description">
            <p className="product-Catagory">{props.product.category}</p>
            <h2>{props.product.name}</h2>
            <p className="price">${props.product.price}</p>
         </div>
      </div>
   );
};

export default Card;

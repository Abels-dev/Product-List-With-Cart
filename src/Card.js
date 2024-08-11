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
         <p className="orderedQuantity">{props.quantity}</p>
         <button onClick={props.increaseQuantity}>
            <img src="/images/icon-increment-quantity.svg" alt="plus" />
         </button>
      </div>
   );
   return (
      <div className="card">
         <img src={props.img} alt="food-img" className="foodImg" />
         {props.isAdded?orderedQuantity:addCart}
         <div className="description">
            <p className="product-Catagory">{props.category}</p>
            <h2>{props.productName}</h2>
            <p className="price">${props.price}</p>
         </div>
      </div>
   );
};

export default Card;

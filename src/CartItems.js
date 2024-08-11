import React from "react";

const CartItem = (props) => {
   return (
      <div className="cartItems">
         <div className="cartDescription">
            <h2>{props.name}</h2>
            <p>
               <span>{props.quantity}</span> @ ${props.price} &nbsp;
               <b>${props.totalPrice}</b>
            </p>
         </div>
         <button className="remove">
            <img src="/images/icon-remove-item.svg" alt="remove-from-cart" onClick={props.deleteItem}/>
         </button>
      </div>
   );
};

export default CartItem;

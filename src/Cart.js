import React, { useState } from "react";
import CartItem from "./CartItems";
const Cart = () => {
   const [isEmpty, setISEmpty] = useState(false);
   const emptyCart = (
      <div className="emptyCart">
         <img src="/images/illustration-empty-cart.svg" alt="cart-Background" />
         <p>Your items will apear here</p>
      </div>
   );
   const order = (
      <div>
         <div className="totalPrice">
            <p>order Total</p>
            <p className="totalOrder">$50</p>
         </div>
         <div className="carbonNeutral">
            <img src="/images/icon-carbon-neutral.svg" alt="icon" />
            <p>
               This is a <b>carbon-neutral</b> delivery
            </p>
         </div>
         <button className="orderBtn">Confirm Order</button>
      </div>
   );
   return (
      <div className="cart">
         <h1>Your Cart (0)</h1>
         <section><CartItem/><CartItem/></section>
         {isEmpty ? emptyCart : order}
      </div>
   );
};

export default Cart;

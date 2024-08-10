import React from "react";

const CartItem = () => {
   return (
      <div className="cartItems">
         <div className="cartDescription">
            <h2>waffle cream</h2>
            <p>
               <span>1x</span> @ $5.50 &nbsp;
               <b>$5.50</b>
            </p>
         </div>
         <button className="remove">
            <img src="/images/icon-remove-item.svg" alt="remove-from-cart" />
         </button>
      </div>
   );
};

export default CartItem;

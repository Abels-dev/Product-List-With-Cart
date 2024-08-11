import React, { useState } from "react";
import CartItem from "./CartItems";
const Cart = (props) => {
   const [isEmpty, setISEmpty] = useState(true);
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
            <p className="totalOrder">{props.totalOrder}</p>
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
   React.useEffect(() => {
      if (props.cartItems.length > 0) setISEmpty(false);
      else setISEmpty(true);
   }, [props.cartItems.length]);
   const removeCart=(index)=>{
        props.handleDelete(index);
   }
   const cartItems = props.cartItems.map((items,index) => {
      return (
         <CartItem
            key={index}
            name={items.name}
            price={items.price}
            totalPrice={items.totalPrice}
            quantity={items.quantity}
            deleteItem={()=>removeCart(index)}
         />
      );
   });
   return (
      <div className="cart">
         <h1>Your Cart ({props.totalQuantity})</h1>
         <section>{!isEmpty && cartItems}</section>
         {isEmpty ? emptyCart : order}
      </div>
   );
};

export default Cart;

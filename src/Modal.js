import React from "react";

const Modal = (props) => {
   const orderedItems=props.cartItems.map(item=>{
         return (
            <div className="orders">
               <div className="orderDescription">
                  <img
                     src={item.thumbnail}
                     alt="food-img"
                  />
                  <div className="orderName">
                     <h2>{item.name}</h2>
                     <div>
                        <span>{item.quantity}x</span> @ ${item.price}
                     </div>
                  </div>
               </div>
               <p>${item.totalPrice}</p>
            </div>
         )
   })
   return (
      <div className="modal">
         <img
            src="/images/icon-order-confirmed.svg"
            className="completed"
            alt="completed"
         />
         <h1>Order Confirmed</h1>
         <p>We hope you enjoy your food</p>
         <section className="orderContainer">
            {orderedItems}
            <div className="orderPrice">
               <p>Order Total</p>
               <p className="totalOrder">${props.totalOrder}</p>
            </div>
         </section>
         <button className="new-order" onClick={props.startNewOrder}>Start New Order</button>
      </div>
   );
};

export default Modal;

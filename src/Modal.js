import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const Modal = (props) => {
   const orderedItems = props.cartItems.map((item, index) => {
      return (
         <div className="orders" key={index}>
            <div className="orderDescription">
               <img src={item.thumbnail} alt="food-img" />
               <div className="orderName">
                  <h2>{item.name}</h2>
                  <div>
                     <span>{item.quantity}x</span> @ ${item.price}
                  </div>
               </div>
            </div>
            <p>${item.totalPrice}</p>
         </div>
      );
   });
   return (
      <AnimatePresence>
         <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal">
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
            <button className="new-order" onClick={props.startNewOrder}>
               Start New Order
            </button>
         </motion.div>
      </AnimatePresence>
   );
};

export default Modal;

import { motion, AnimatePresence } from "framer-motion";
import { useGlobalContext } from "../context";

const Modal = () => {
   const { cartItem, totalOrder, startNewOrder } = useGlobalContext();
   const orderedItems = cartItem.map((item, index) => {
      return (
         <div className="orders" key={index}>
            <div className="orderDescription">
               <img src={item.image.thumbnail} alt="food-img" />
               <div className="orderName">
                  <h2>{item.name}</h2>
                  <div>
                     <span>{item.quantity}x</span> @ ${item.price}
                  </div>
               </div>
            </div>
            <p>{item.totalPrice}</p>
         </div>
      );
   });
   return (
      <div className="modalOverlay">
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
                     <p className="totalOrder">{totalOrder}</p>
                  </div>
               </section>
               <button className="new-order" onClick={startNewOrder}>
                  Start New Order
               </button>
            </motion.div>
         </AnimatePresence>
      </div>
   );
};

export default Modal;

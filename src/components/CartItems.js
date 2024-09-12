import { useGlobalContext } from "../context";

const CartItems = () => {
   const { cartItem, handleDelete } = useGlobalContext();
   return cartItem.map((cart, index) => {
      return (
         <div className="cartItems" key={index}>
            <div className="cartDescription">
               <h2>{cart.name}</h2>
               <p>
                  <span>{cart.quantity}</span> @ ${cart.price} &nbsp;
                  <b>{cart.totalPrice}</b>
               </p>
            </div>
            <button className="remove" onClick={() => handleDelete(index)}>
               <img src="/images/icon-remove-item.svg" alt="remove-from-cart" />
            </button>
         </div>
      );
   });
};

export default CartItems;

import CartItems from "./CartItems";
import { useGlobalContext } from "../context";
const Cart = () => {
   const { cartItem, totalOrder, totalCartItem, confirmOrder } =
      useGlobalContext();
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
            <p className="totalOrder">{totalOrder}</p>
         </div>
         <div className="carbonNeutral">
            <img src="/images/icon-carbon-neutral.svg" alt="icon" />
            <p>
               This is a <b>carbon-neutral</b> delivery
            </p>
         </div>
         <button className="orderBtn" onClick={confirmOrder}>
            Confirm Order
         </button>
      </div>
   );
   return (
      <div className="cart">
         <h1>Your Cart ({totalCartItem})</h1>
         <section>{cartItem.length > 0 && <CartItems />}</section>
         {cartItem.length === 0 ? emptyCart : order}
      </div>
   );
};

export default Cart;

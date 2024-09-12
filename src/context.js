import React, { useContext, useState, useEffect } from "react";
import data from "./data.json";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
   const [cards, setCards] = useState([]);
   const [cartItem, setCartItem] = useState([]);
   const [totalCartItem, setTotalCartItem] = useState(0);
   const [totalOrder, setTotalOrder] = useState(0);
   const [orderConfirmed, setOrderConfirmed] = useState(false);
   const manageCartItems = (items) => {
      let totalQuantity = 0;
      let totalCartPrice = 0;
      items.forEach((item) => {
         totalQuantity += item.quantity;
         totalCartPrice += item.totalPrice;
      });
      setTotalOrder(totalCartPrice);
      setTotalCartItem(totalQuantity);
   };
   const manageQuantity = (index, isIncreased) => {
      setCards((prevCard) => {
         const updatedCards = prevCard.map((item, idx) => {
            if (index === idx) {
               return {
                  ...item,
                  quantity: isIncreased?item.quantity + 1 :item.quantity - 1 ,
               };
            }
            return item;
         });
         // After updating the cards, update the cart items
         setCartItem((prevCartItem) => {
            const items = prevCartItem.map((item,cartIndex) => {
               if (item.name === updatedCards[index].name) {
                  if(updatedCards[index].quantity<1){
                     handleDelete(cartIndex)
                     return ''
                  }
                  return {
                     ...item,
                     quantity: updatedCards[index].quantity,
                     totalPrice: item.price * updatedCards[index].quantity,
                  };
               }
               return item;
            });
            manageCartItems(items);
            return items;
         });
         return updatedCards;
      });
   };
   const decreaseQuantity = (index) => {
      manageQuantity(index, false);
   };
   const increaseQuantity = (index) => {
      manageQuantity(index, true);
   };
   const addToCart = (id) => {
      const addedItem = cards.find((card, index) => index === id);
      setCards((prevCard) => {
         const updatedCard = prevCard.map((item, index) => {
            if (id === index) return { ...item, isAdded: true };
            return item;
         });
         return updatedCard;
      });
      setCartItem((prevItem) => {
         const updatedItem = [
            ...prevItem,
            { ...addedItem, totalPrice: addedItem.price * addedItem.quantity },
         ];
         manageCartItems(updatedItem);
         return updatedItem;
      });
   };
   const handleDelete = (id) => {
      setCards((prevCard) => {
         return prevCard.map((item, index) => {
            if (item.name === cartItem[id].name)
               return { ...item, isAdded: false, quantity: 1 };
            return item;
         });
      });
      setCartItem((prevItems) => {
         const items = prevItems.filter((el, index) => id !== index);
         manageCartItems(items);
         return items;
      });
   };
   const confirmOrder = () => {
      setOrderConfirmed(true);
   };
   const startNewOrder = () => {
      setCartItem([]);
      setCards((prevCard) => {
         return prevCard.map((item) => {
            return { ...item, isAdded: false, quantity: 1 };
         });
      });
      setOrderConfirmed(false);
      setTotalCartItem(0);
   };
   useEffect(() => {
      setCards((prevCard) => {
         const updatedCard = data.map((item) => {
            return { ...item, isAdded: false, quantity: 1,totalPrice: item.price * item.quantity };
         });
         return updatedCard;
      });
   }, []);
   if (cards.length === 0) {
      return <div>Loading...</div>; // or a loading spinner if you prefer
   }
   return (
      <AppContext.Provider
         value={{
            cards,
            addToCart,
            cartItem,
            totalCartItem,
            totalOrder,
            increaseQuantity,
            decreaseQuantity,
            handleDelete,
            orderConfirmed,
            startNewOrder,
            confirmOrder,
         }}>
         {children}
      </AppContext.Provider>
   );
};

export const useGlobalContext = () => {
   return useContext(AppContext);
};

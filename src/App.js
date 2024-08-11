import React, { useState } from "react";
import Card from "./Card";
import data from "./data.json";
import Cart from "./Cart";
import Modal from "./Modal";
import "./style.css";
const App = () => {
   const [cartItems, setCartItmes] = useState([]);
   const [cartQuantity, setCartQuantity] = useState(0);
   const [totalOrder, setTotalOrder] = useState(0);
   const [cards, setCards] = useState([]);
   const [orderConfirmed, setOrderConfirmed] = useState(false);
   React.useEffect(() => {
      setCards(
         data.map((item) => {
            return { ...item, isAdded: false, quantity: 1 };
         })
      );
   }, []);
   const manageCartItems = (items) => {
      let totalQuantity = 0;
      let totalCartPrice = 0;
      items.forEach((item) => {
         totalQuantity += item.quantity;
         totalCartPrice += item.totalPrice;
      });
      setTotalOrder(totalCartPrice);
      setCartQuantity(totalQuantity);
   };
   const decreaseQuantity = (index) => {
      setCards((prevCard) => {
         const updatedCards = prevCard.map((item, idx) => {
            if (index === idx && item.quantity > 1) {
               return { ...item, quantity: item.quantity - 1 };
            }
            return item;
         });

         // After updating the cards, update the cart items
         setCartItmes((prevCartItem) => {
            const items = prevCartItem.map((item) => {
               if (item.name === updatedCards[index].name) {
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

   const increaseQuantity = (index) => {
      setCards((prevCard) => {
         const updatedCards = prevCard.map((item, idx) => {
            if (index === idx) {
               return { ...item, quantity: item.quantity + 1 };
            }
            return item;
         });

         // After updating the cards, update the cart items
         setCartItmes((prevCartItem) => {
            const items = prevCartItem.map((item) => {
               if (item.name === updatedCards[index].name) {
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

   const addToCart = (index) => {
      setCards((prevCard) => {
         return prevCard.map((item, idx) => {
            if (index === idx) return { ...item, isAdded: true };
            return item;
         });
      });
      setCartItmes((prevItems) => {
         const items = [
            ...prevItems,
            {
               name: cards[index].name,
               quantity: cards[index].quantity,
               price: cards[index].price,
               totalPrice: cards[index].price * cards[index].quantity,
               thumbnail: cards[index].image.thumbnail,
            },
         ];
         manageCartItems(items);
         return items;
      });
   };
   const handleDelete = (index) => {
      setCards((prevCard) => {
         return prevCard.map((item, idx) => {
            if (item.name === cartItems[index].name)
               return { ...item, isAdded: false, quantity: 1 };
            return item;
         });
      });
      setCartItmes((prevItems) => {
         const items = prevItems.filter((el, idx) => index !== idx);
         manageCartItems(items);
         return items;
      });
   };
   const confirmOrder = () => {
      setOrderConfirmed(true);
      document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
   };
   const startNewOrder = () => {
      setCartItmes([]);
      setCards((prevCard) => {
         return prevCard.map((item) => {
            return { ...item, isAdded: false, quantity: 1 };
         });
      });
      setOrderConfirmed(false)
      setCartQuantity(0)
      document.body.style.backgroundColor = "hsl(13, 31%, 94%)";
   };
   const card = cards.map((el, index) => {
      return (
         <Card
            productName={el.name}
            category={el.category}
            img={el.image.desktop}
            price={el.price}
            isAdded={el.isAdded}
            quantity={el.quantity}
            key={index}
            addToCart={() => addToCart(index)}
            increaseQuantity={() => increaseQuantity(index)}
            decreaseQuantity={() => decreaseQuantity(index)}
         />
      );
   });
   return (
      <div className="container">
         <section>
            <h1>Desserts</h1>
            <div
               className={`allCards ${orderConfirmed ? "modal-overlay" : ""}`}>
               {card}
            </div>
         </section>
         <div className={orderConfirmed ? "modal-overlay" : ""}>
            <Cart
               cartItems={cartItems}
               totalQuantity={cartQuantity}
               totalOrder={totalOrder}
               handleDelete={handleDelete}
               confirmOrder={() => confirmOrder()}
            />
         </div>
         {orderConfirmed && (
            <Modal
               cartItems={cartItems}
               totalOrder={totalOrder}
               startNewOrder={() => startNewOrder()}
            />
         )}
      </div>
   );
};

export default App;

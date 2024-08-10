import React from "react";
import Card from "./Card";
import data from "./data.json";
import Cart from "./Cart";
import "./style.css";
const App = () => {
   const card = data.map((el, index) => {
      return (
         <Card
            productName={el.name}
            category={el.category}
            img={el.image.desktop}
            price={el.price}
            key={index}
         />
      );
   });
   console.log(data);
   return (
      <div className="container">
         <section>
            <h1>Deserts</h1>
            <div className="allCards">{card}</div>
         </section>
         <Cart/>
      </div>
   );
};

export default App;

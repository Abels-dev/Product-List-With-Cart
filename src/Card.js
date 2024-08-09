import React from "react";

const Card = (props) => {
   return (
      <div className="card">
         <img src={props.img} alt="food-img" className="foodImg"/>
         <div className="addCart">
            <img src={"/images/icon-add-to-cart.svg"} alt="cart" />
            <p>Add to Cart</p>
         </div>
         <div className="description">
            <p className="product-Catagory">{props.category}</p>
            <h2>{props.productName}</h2>
            <p className="price">${props.price}</p>
         </div>
      </div>
   );
};

export default Card;

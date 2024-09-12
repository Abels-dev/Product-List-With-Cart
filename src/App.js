import Card from "./components/Cards";
import Cart from "./components/Cart";
import { useGlobalContext } from "./context";
import Modal from "./components/Modal";
import "./style.css";

const App = () => {
   const { orderConfirmed } = useGlobalContext();
   return (
      <div className="container">
         <section>
            <h1 className="dessert">Desserts</h1>
            <div className="allCards">
               <Card />
            </div>
         </section>
         <Cart />
         {orderConfirmed && <Modal />}
      </div>
   );
};

export default App;

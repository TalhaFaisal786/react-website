import React,{useState} from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Carts/Cart";
import CartProvider from "./Store/CartProvider";

function App() {

  const[cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    return(
      setCartIsShown(true)
    )
  }

  
  const hideCartHandler=()=>{
    return(
      setCartIsShown(false)
    )
  }
  return (
    <CartProvider>
    {cartIsShown &&<Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
      <Meals></Meals>
     </main>
    </CartProvider>
  );
}

export default App;

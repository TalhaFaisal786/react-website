import React, { Fragment, useContext } from "react";
import CartIcon from "../Carts/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../Store/Cart-Context";

const HeaderCartButton = (props) => {

  const cartCtx=useContext(CartContext);

  const numberOfCartItems=cartCtx.items.reduce((curNumber,item) =>{
    return curNumber+item.amount;
  },0);
  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;

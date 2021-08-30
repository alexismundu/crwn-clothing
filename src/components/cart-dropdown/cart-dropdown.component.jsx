import React from "react";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CartItem from "../cart-item";

import {
  DropDownContainer,
  CartItems,
  EmptyMessage,
  CustomButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <DropDownContainer>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CustomButton
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push("/checkout");
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </DropDownContainer>
  );
};

export default CartDropdown;

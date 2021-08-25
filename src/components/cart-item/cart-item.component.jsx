import React from "react";

import {
  CartItemContainer,
  ItemImage,
  ItemDetailsContainer,
  ItemName,
} from "./cart-item.styles";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <CartItemContainer>
    <ItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <ItemName>{name}</ItemName>
      <span>
        {quantity} x {price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;

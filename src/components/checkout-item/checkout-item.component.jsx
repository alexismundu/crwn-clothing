import React from "react";
import { connect } from "react-redux";

import { clearItem, addItem, removeItem } from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  ItemImage,
  ItemName,
  ItemQuantity,
  Arrow,
  QuantityValue,
  ItemPrice,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <ItemImage alt="item" src={imageUrl} />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <QuantityValue>{quantity}</QuantityValue>
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </ItemQuantity>
      <ItemPrice>{price}</ItemPrice>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

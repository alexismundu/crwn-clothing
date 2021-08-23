import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  Image,
  CollectionFooterName,
  CollectionFooterPrice,
  CollectionFooterContainer,
  CustomButton,
  CollectionItemContainer,
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <Image
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <CollectionFooterName>{name}</CollectionFooterName>
        <CollectionFooterPrice>{price}</CollectionFooterPrice>
      </CollectionFooterContainer>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

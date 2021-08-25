import styled, { css } from "styled-components";

const commonWidth = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  ${commonWidth};
  padding-right: 15px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemName = styled.span`
  ${commonWidth};
`;

export const ItemQuantity = styled.span`
  ${commonWidth};
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const QuantityValue = styled.span`
  margin: 0 10px;
`;

export const ItemPrice = styled.span`
  ${commonWidth};
`;

export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;

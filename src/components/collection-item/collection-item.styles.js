import styled from "styled-components";
import CustomButtonBase from "../custom-button";

export const CollectionFooterName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionFooterPrice = styled.span`
  width: 10%;
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const CustomButton = styled(CustomButtonBase)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  ${CollectionItemContainer}:hover & {
    opacity: 0.85;
    display: flex;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;

  ${CollectionItemContainer}:hover & {
    opacity: 0.8;
  }
`;

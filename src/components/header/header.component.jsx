import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon";
import CartDropdownContainer from "../cart-dropdown/cart-dropdown.container";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, isCartDropdownHidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SING IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {isCartDropdownHidden ? null : <CartDropdownContainer />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartDropdownHidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);

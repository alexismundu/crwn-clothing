import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router";
import CartDropdown from "./cart-dropdown.component";

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const CartDropDownContainer = compose(
  withRouter,
  connect(mapStateToProps)
)(CartDropdown);

export default CartDropDownContainer;

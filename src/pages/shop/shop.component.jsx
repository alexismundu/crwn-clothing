import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview";
import CategoryPage from "../collection";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
    </div>
  );
};

export default ShopPage;

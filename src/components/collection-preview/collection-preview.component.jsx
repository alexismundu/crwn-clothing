import React from "react";
import { useRouteMatch } from "react-router-dom";

import CollectionItem from "../collection-item";

import {
  CollectionPreviewContainer,
  TitleContainer,
  Preview,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, routeName }) => {
  let match = useRouteMatch();
  console.log(match);
  return (
    <CollectionPreviewContainer>
      <TitleContainer to={`${match.url}/${routeName}`}>
        {title.toUpperCase()}
      </TitleContainer>
      <Preview>
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;

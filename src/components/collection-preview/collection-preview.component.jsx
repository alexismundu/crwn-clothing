import React from "react";

import CollectionItem from "../collection-item";

import {
  CollectionPreviewContainer,
  TitleContainer,
  Preview,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <TitleContainer>{title.toUpperCase()}</TitleContainer>
    <Preview>
      {items
        .filter((item, i) => i < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </Preview>
  </CollectionPreviewContainer>
);

export default CollectionPreview;

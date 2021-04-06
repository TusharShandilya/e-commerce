import React from "react";
import { useParams } from "react-router";

export const Category = () => {
  const { categoryName } = useParams();

  return <>Category: {categoryName}</>;
};

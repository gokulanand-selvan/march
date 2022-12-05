import React from "react";
import { useParams } from "react-router-dom";
import ProductDisplay from "../ProductDisplay";

export default function ProductList({ product }) {
  const { id } = useParams();
  let products = product.filter((i) => i.categoryId === parseInt(id));
  // console.log(products);

  return (
    <>
      {products.map((e) => (
        <ProductDisplay
          id={e.id}
          key={e.id}
          data={e}
          detialImages={e.detialImages}
        />
      ))}
    </>
  );
}

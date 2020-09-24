import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/Product";

export const ProductPage = (props) => {
  return (
    <>
      <div>Strona produktu</div>
      <Product />
      <Link to="/products">Powrót do listy produktów</Link>
    </>
  );
};

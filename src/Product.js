import React from "react";
import Button from "./Button";


const Product = ({
  title,
  description,
  price,
  category,
  supression,
  modification
}) => {
  return (
    <>
      <td>{title}</td>
      <td>{description} </td>
      <td>{price}</td>
      <td>{category}</td>
      <td>
        <Button action="Modifier" typeBtn="btn-warning" click={modification} />
        <Button action="Supprimer" typeBtn="btn-danger" click={supression} />
      </td>
    </>
  );
};

export default Product;

import React, { useState } from "react";
import Product from "./Product";
import AddForm from "./AddForm";
import { v4 as uuidv4 } from "uuid";
import ModifProductForm from "./ModifProductForm";



const Products = ({ ajoutProduct, fermerajoutProduct, products: productsProp } ) => {
  const [products, setProducts] = useState(productsProp)
  const [idProductModifier, setIdProductModifier] = useState(0);

  const handleSuppressionProduct = (id) => {
    const productIndexTab = products.findIndex((product) => product.id === id);
    if (productIndexTab !== -1) {
      const newProducts = [...products];
      newProducts.splice(productIndexTab, 1);
      setProducts(newProducts);
    }
  };

  const handleModificationProduct = (id, title, description, price, category) => {
    const caseProduct = products.findIndex((product) => product.id === id);

    if (caseProduct !== -1) {
      const newProduct = { id, title, description, price, category };
      const newListe = [...products];
      newListe[caseProduct] = newProduct;

      setProducts(newListe);
      setIdProductModifier(0);
    }
  };

  const handleAjoutProduct = (title, description, price, category) => {
    const newProduct = {
      id: uuidv4(),
      title: title,
      description: description,
      price: price,
      category: category,
    };
    setProducts([...products, newProduct]);
    fermerajoutProduct();
  };

  return (
    <>
      <table className="table text-center">
        <thead>
          <tr className="table-dark">
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Categorie</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            if (product.id !== idProductModifier) {
              return (
                <tr key={product.id}>
                  <Product
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                    supression={() => handleSuppressionProduct(product.id)}
                    modification={() => setIdProductModifier(product.id)}
                  />
                </tr>
              );
            } else {
              return (
                <tr key={product.id}>
                  <ModifProductForm
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    category={product.category}
                    validationModification={handleModificationProduct}
                  />
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      {ajoutProduct && (
        <AddForm
          validation={(title, description, price, category) =>
            handleAjoutProduct(title, description, price, category)
          }
        />
      )}
    </>
  );
};

export default Products;

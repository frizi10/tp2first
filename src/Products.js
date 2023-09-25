import React, { useState } from "react";
import Product from "./Product";
import AddForm from "./AddForm";
import { v4 as uuidv4 } from "uuid";
import ModifProductForm from "./ModifProductForm";
const Products = ({ ajoutProduct, fermerajoutProduct }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      category: "men's clothing",
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      category: "men's clothing",
    },
  ]);

  const [idProductModifier, setIdProductModifier] = useState(0);
  //supression

  const handleSuppressionProduct = (id) => {
    const productIndexTab = products.findIndex((product) => product.id === id);
    if (productIndexTab !== -1) {
      const newProducts = [...products];
      newProducts.splice(productIndexTab, 1);
      setProducts(newProducts);
    }
  };

  //Modification
   const handleModificationProduct = (id, title, description, price, category) => {
     
      products.findIndex((product) => {
        const  {id, title, description, price, category} = product
        console.log(id)

      });

    //    const newProduct = {id, title, description, price, category}
    //    const newList = setProducts([...products] )
    //    newList[caseProduct] = newProduct;
       
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
            const { id, title, description, price, category} = product
            
            if (id !== idProductModifier) {
              return (
                <tr key={id}>
                  <Product
                    title = {title} 
                    description = {description}
                    price = {price}
                    category = {category}
                    supression = {() => handleSuppressionProduct(id)}
                    modification = {() => setIdProductModifier(id)}
                  />
                </tr>
              )
            } else {
              return ( 
              
                <tr key={product.id}>
                <ModifProductForm 
                    title ={title}
                    description = {description}
                    price = {price}
                    category = {category}
                    validationModification= {handleModificationProduct}

                 />
                </tr>
               
              )
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

  //Modification
 
};
export default Products;

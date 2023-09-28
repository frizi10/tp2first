import "./App.css";
import Products from "./Products";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Accueil";
import NavBar from "./NavBar";
import NoPageFound from "./NoPageFound";

function App() {
  //Recuperation des donnees
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsFromServer = await fetchProducts();
        setProducts(productsFromServer);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };
    getProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  };



  // delete
  const deleteProduct = async (id) => {
    const response = await fetch(`http://localhost:5000/products/${id}`, {
      method: "DELETE",
    });
    if(response.ok)

    setProducts(products.filter((product) => product.id !== id));
    else 
    console.error('Echec de suppression')
  };

  //update
  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`);
    const data = await res.json();
    return data;
  };

  const addProduct = async (product) => {
    const res = fetch("http://localhost:5000/products", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const newProduct = await res.json();
    setProducts([...products, newProduct]);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="" element={<Accueil />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/products" element={<Products products={products}   handleSuppressionProduct={deleteProduct} />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );

 
}

export default App;

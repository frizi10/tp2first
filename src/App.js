
import './App.css';
import Button from './Button';
import Title from './Title';
import Products from './Products';
import { useState } from 'react';


function App() {
  
  const [ajoutProduct, setAjoutProduct] = useState(false);
  

  const handleClicAjoutProduct = () => {

   setAjoutProduct((oldState=>{
    
    return(!oldState)
   }));
  
  }
  const action = ajoutProduct ? 'Fermer l\'ajout' : 'Ajouter';
  return (
    <div className='container'>
       <Title text = 'Liste Des Produits'/>
       <Products ajoutProduct = {ajoutProduct} fermerajoutProduct ={()=>setAjoutProduct(false)}/>
       <Button
        
          action = {action}
          typeBtn= "btn-success" 
          css = "w-100" 
          click= { handleClicAjoutProduct } />  
        
      
    </div>
  );
}

export default App;

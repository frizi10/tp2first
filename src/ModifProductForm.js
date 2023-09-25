import React, { useEffect } from "react";
import { useState } from 'react';
import Button from "./Button";






const ModifProductForm = (title, description, price, category) => {
   const [titleSaisi, setTitleSaisi] = useState('')
   const [descriptionSaisi, setDescriptionSaisi] = useState('')
   const [priceSaisi, setPriceSaisi] = useState('')
   const [categorySaisi, setCategorySaisi] = useState('')

  useEffect= (()=>

{
    setTitleSaisi(title);
    setDescriptionSaisi(description)
    setPriceSaisi(price)
    setCategorySaisi(category)



}, [title, description, price, category])

 const handleValidation = ()=> {
    console.log("validation")
    //console.log(title)
 }
  
    
    return (
        <>
       
        <td> <input type="text" defaultValue={titleSaisi} onChange={(e) => setTitleSaisi(e.target.value)}/></td>
        <td> <input type="text" value={descriptionSaisi} onChange={(e) => setDescriptionSaisi(e.target.value)}/></td>
        <td> <input type="number" value={priceSaisi} onChange={(e) => setPriceSaisi(e.target.value)}/></td>
        <td> <input type="text" value={categorySaisi}onChange={(e) => setCategorySaisi(e.target.value)} /></td>
        <td> <Button typeBtn="btn-primary" click={()=>handleValidation} action="valider"/></td>
     
          
        
        </>
    )
      
  
}

export default ModifProductForm;
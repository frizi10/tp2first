import React, { useState } from "react"
import Button from "./Button";




const  AddForm = ({validation})=> {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const handleValidationForm = (e)=>{
        e.preventDefault()
        validation(title, description, price, category)
        setTitle('');
        setDescription('');
        setPrice('');
        setCategory('');
        
    }


    return (
       <>
        <h2> Formulaire d'ajout </h2>
        <form>
            <div className="form-group">
              <label htmlFor="title">Nom</label>
              <input type="text" 
                    className="form-control" 
                    id="title" 
                    name="title" 
                    value={title}
                    onChange = {(e)=> setTitle(e.target.value)}
                    />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input type="text" 
                    className="form-control" 
                    id="description" 
                    name="description"
                    value={description}
                    onChange = {(e)=> setDescription(e.target.value)}

                    />
            </div>
            <div className="form-group">
              <label htmlFor="price">Prix</label>
              <input type="number" 
                     className="form-control" 
                     id="price"
                     name="price"
                     value={price}
                     onChange = {(e)=> setPrice(e.target.value)}
                     />
            </div>
            <div className="form-group">
              <label htmlFor="category">Catégorie</label>
              <input type="text" 
                     className="form-control" 
                     id="category"
                     name="category"
                     value={category}
                     onChange = {(e)=> setCategory(e.target.value)}
              />
            </div>
            <Button 
                action = "Valider"
                typeBtn= "btn-primary"
                click ={handleValidationForm}

            />
            
        </form>
       </>
       );
   
}
export default AddForm;
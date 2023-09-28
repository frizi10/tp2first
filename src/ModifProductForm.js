import { useState } from "react";
import Button from "./Button";

const ModifProductForm = ({
  id,
  title: initialTitle,
  description: initialDescription,
  price: initialPrice,
  category: initialCategory,
  validationModification,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [price, setPrice] = useState(initialPrice);
  const [category, setCategory] = useState(initialCategory);

  const handleValidation = (e) => {
    e.preventDefault();

    validationModification(id, title, description, price, category);
  };

  return (
    <>
      <td>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </td>
      <td>
    
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </td>
      <td>
     
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </td>
      <td>
      
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </td>
      <td>
      
        <Button
          typeBtn="btn-primary"
          click={handleValidation}
          action="valider"
        />
      </td>
    </>
  );
};

export default ModifProductForm;

import React, { useState, useContext } from 'react';
import './Ingredient.scss';
import { RecipeContext } from '../../context/index';
import ingredients from '../IngredientList/IngredientList';

const Ingredient = props => {
  const [isEditing, toggleEdit] = useState(false);
  const { ingredient } = props;
  const state = useContext(RecipeContext);

  const handleChange = e => {
    state.updateCurrentRecipe(e.target.id, e.target.value);
  };

  const handleDelete = e => {
    state.deleteCurrentIngredient(ingredient.id);
  };

  return (
    <>
      {isEditing ? (
        <>
          <span className="ingredient-info">
            <input type="text" id={ingredient.id} value={ingredient.name} onChange={handleChange} />
          </span>
          <span className="buttons">
            <button className="save-button" onClick={() => toggleEdit(false)}>
              Save
            </button>
          </span>
        </>
      ) : (
        <>
          <span className="ingredient-info" id={ingredient.id}>
            {ingredient.name} - {ingredient.quantity}
          </span>
          <span className="buttons">
            <button
              className="x-button"
              ingredient-id={ingredient.id}
              onClick={() => handleDelete()}
            >
              X
            </button>

            <button onClick={() => toggleEdit(true)} className="edit-button">
              Edit
            </button>
          </span>
        </>
      )}
    </>
  );
};

export default Ingredient;

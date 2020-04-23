import React, { useContext } from 'react';
import { RecipeContext } from '../../context/index';
import '../../components/IngredientList/IngredientList.scss';

const ingredients = props => {
  const { ingredients } = props;
  return (
    <div className="ingredientsSection">
      <ul>
        {ingredients ? (
          ingredients.map((ingredient, index) => (
            <li key={index} className="ingredient-row">
              <span className="ingredient-info">
                {ingredient.name} - {ingredient.quantity}
              </span>
              <span className="buttons">
                <button className="x-button">X</button>

                <button className="edit-button">Edit</button>
              </span>
            </li>
          ))
        ) : (
          <p> Loading Recipes </p>
        )}
      </ul>
    </div>
  );
};

export default ingredients;

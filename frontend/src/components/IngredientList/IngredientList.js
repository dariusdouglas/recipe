import React from 'react';
import './IngredientList.scss';
import Ingredient from '../Ingredient/Ingredient';

const ingredients = props => {
  const { ingredients } = props;
  return (
    <div className="ingredientsSection">
      <ul>
        {ingredients && ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <li key={`ingredient_li_${index}`} className="ingredient-row">
              <Ingredient ingredient={ingredient} />
              {/* <span className="ingredient-info">
                {ingredient.name} - {ingredient.quantity}
              </span>
              <span className="buttons">
                <button className="x-button">X</button>

                <button className="edit-button">Edit</button>
              </span> */}
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

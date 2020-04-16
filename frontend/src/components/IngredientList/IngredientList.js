import React, { useContext } from 'react';
import { RecipeContext } from '../../context/index';

const IngredientsList = props => {
  const recipeContext = useContext(RecipeContext);
  const { recipes } = recipeContext;
  return (
    <div> {recipes ? recipes.map(recipe => <p>{recipe.name}</p>) : <p> Loading Recipes </p>}</div>
    <div></div>
  );
};

export default IngredientsList;

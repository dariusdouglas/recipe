import React, { useContext } from 'react';
import { RecipeContext } from '../../context/index';
import IngredientList from '../IngredientList/IngredientList';
import './RecipePage.scss';
const RecipePage = () => {
  const context = useContext(RecipeContext);
  const { currentRecipe } = context.state;

  //   console.log(currentRecipe);
  //   const { name, ingredients } = currentRecipe;

  return (
    <div className="recipe-page">
      {/* <h1>{name}</h1> */}
      <h1 className="recipe-header">Chicken Parm</h1>

      {/* <IngredientList ingredients={ingredients} /> */}
      <IngredientList
        ingredients={[
          {
            name: 'Chicken',
            quantity: '2lbs'
          },
          {
            name: 'Parm',
            quantity: '10lbs'
          }
        ]}
      />
    </div>
  );
};

export default RecipePage;

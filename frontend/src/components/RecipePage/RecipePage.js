import React, { useContext } from 'react';
import { RecipeContext } from '../../context/index';
import IngredientList from '../IngredientList/IngredientList';
import './RecipePage.scss';
const RecipePage = () => {
  const context = useContext(RecipeContext);
  const { currentRecipe } = context.state;

  //   console.log(currentRecipe);
  const { name, ingredients } = currentRecipe;

  return (
    <div className="recipe-page">
      <h1 className="recipe-header">{name}</h1>
      {/* <h1 className="recipe-header">Chicken Parm</h1> */}

      <IngredientList ingredients={ingredients} />
      {/* <IngredientList
        ingredients={[
          {
            id: 1,
            name: 'Chicken',
            quantity: '2lbs'
          },
          {
            id: 2,
            name: 'Parm',
            quantity: '10lbs'
          }
        ]}
      /> */}
    </div>
  );
};

export default RecipePage;
import React, { useContext } from 'react';
import './GridItem.scss';
import { RecipeContext, RecipeProvider } from '../../context/index';
import { useHistory } from 'react-router-dom';

const GridItem = props => {
  const history = useHistory();
  const { recipe } = props;
  const state = useContext(RecipeContext);
  console.log(state);

  function handleClick() {
    state.setCurrentRecipe(recipe);
    history.push(`/${recipe.slug}`);
  }

  const ingredients = recipe.ingredients.map((ingredient, index) => (
    <p key={index} className="ingredient">
      {ingredient.name} - {ingredient.quantity}
    </p>
  ));

  return (
    <RecipeProvider>
      <div className="grid-card" onClick={handleClick}>
        <div className="item-name">
          <p>{recipe.name}</p>
        </div>
        <div className="ingredientList">{ingredients}</div>
      </div>
    </RecipeProvider>
  );
};

export default GridItem;

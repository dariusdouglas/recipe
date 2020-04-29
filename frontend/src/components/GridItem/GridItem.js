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
    <p key={`ingredient_${index}`} className="ingredient">
      {ingredient.name} - {ingredient.quantity}
    </p>
  ));

  return (
    <RecipeProvider>
      <div className="grid-card" onClick={handleClick}>
        <img src={recipe.image} />
        <div className="item-name">
          <h3>{recipe.name}</h3>
        </div>
        <div className="ingredients-list">
          <p className="ingredient"> Prep time: {recipe.prep_time}</p>
          <p className="ingredient"> Category: {recipe.category}</p>
        </div>
      </div>
    </RecipeProvider>
  );
};

export default GridItem;

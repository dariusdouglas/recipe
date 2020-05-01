import React, { useContext } from 'react';
import './GridItem.scss';
import { RecipeContext, RecipeProvider } from '../../context/index';
import { useHistory } from 'react-router-dom';

const GridItem = props => {
  const history = useHistory();
  const { recipe } = props;
  const state = useContext(RecipeContext);

  function handleClick() {
    state.setCurrentRecipe(recipe);
    history.push(`/${recipe.slug}`);
  }

  return (
    <div className="grid-card" onClick={handleClick}>
      <img src={recipe.image} alt={`${recipe.name}`} />
      <div className="item-name">
        <h3>{recipe.name}</h3>
      </div>
      <div className="ingredients-list">
        <p className="ingredient"> Prep time: {recipe.prep_time}</p>
        <p className="ingredient"> Category: {recipe.category}</p>
      </div>
    </div>
  );
};

export default GridItem;

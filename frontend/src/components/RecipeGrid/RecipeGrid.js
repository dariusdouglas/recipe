import React, { useContext } from 'react';
import { RecipeContext } from '../../context/index';
import GridItem from '../GridItem/GridItem';
import './RecipeGrid.scss';

const RecipeGrid = () => {
  const recipeContext = useContext(RecipeContext);
  const { state } = recipeContext;
  return (
    <div>
      {/* <GridItem /> */}
      <div className="grid">
        {state.recipes ? (
          state.recipes.map((recipe, index) => (
            <div key={index} className="gridItem">
              <GridItem recipe={recipe} />
            </div>
          ))
        ) : (
          <p> Loading Recipes </p>
        )}
      </div>
    </div>
  );
};

export default RecipeGrid;

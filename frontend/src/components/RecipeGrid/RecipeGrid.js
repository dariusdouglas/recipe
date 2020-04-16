import React, { useContext } from 'react';
import { RecipeContext } from '../../context/index';
import GridItem from '../GridItem/GridItem';

const RecipeGrid = () => {
  const recipeContext = useContext(RecipeContext);
  const { recipes } = recipeContext;
  return (
    <div>
      {/* <GridItem /> */}
      <div>
        {' '}
        {recipes ? (
          recipes.map(recipe => (
            <div>
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

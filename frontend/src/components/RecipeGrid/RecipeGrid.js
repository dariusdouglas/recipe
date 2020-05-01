import React, { useContext } from 'react';
import { RecipeContext } from '../../context/index';
import GridItem from '../GridItem/GridItem';
import './RecipeGrid.scss';

const RecipeGrid = () => {
  const recipeContext = useContext(RecipeContext);
  const { state } = recipeContext;

  let rows = [];
  let curRow = [];
  let curIndex = 0;
  const numRecipes = state.recipes ? state.recipes.length - 1 : 0;

  const grid = state.recipes ? (
    state.recipes.map((recipe, index) => {
      curIndex += 1;
      curRow.push(
        <div key={`row_element_${index}`} className="gridItem">
          <GridItem key={`grid_item_${index}`} recipe={recipe} />
        </div>
      );
      if (curIndex === 4 || index === numRecipes) {
        rows.push(
          <div key={`row_${index}`} className="grid">
            {curRow}
          </div>
        );
        curIndex = 0;
        curRow = [];
      }
    })
  ) : (
    <p> Loading Recipes </p>
  );
  return <>{rows}</>;
};

export default RecipeGrid;

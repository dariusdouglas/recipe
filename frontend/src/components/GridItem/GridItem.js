import React from 'react';

const GridItem = props => {
  const { recipe } = props;

  return (
    <div>
      <p>{recipe.name}</p>
      <p>{recipe.ingredients}</p>
    </div>
  );
};

export default GridItem;

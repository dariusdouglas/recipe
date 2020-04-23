import React, { useState, useEffect } from 'react';

const mockData = {
  recipes: [
    {
      name: 'Chicken Parm',
      slug: 'chicken_parm',
      ingredients: [
        {
          name: 'Chicken',
          quantity: '2lbs'
        },
        {
          name: 'Parm',
          quantity: '10lbs'
        }
      ]
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      ingredients: [
        {
          name: 'Chicken',
          quantity: '1lbs'
        },
        {
          name: 'Brocolli',
          quantity: '.5lbs'
        }
      ]
    }
  ],
  currentRecipe: {}
};

// Create Context object
const RecipeContext = React.createContext();

// Provider "Provides" all data and states as props from topmost part of the react tree to inner components
const RecipeProvider = props => {
  // url to be used later in fetch
  // const url = '';

  const setCurrentRecipe = recipe => {
    setRecipes({ ...state, currentRecipe: recipe });
  };

  const [state, setRecipes] = useState([{ recipes: [], currentRecipe: () => {} }]);

  const fetcheRecipes = async () => {
    // const response = await fetch(url);
    // const recipeData = response.json();
    const recipeData = mockData;

    setRecipes(recipeData);
  };

  useEffect(() => {
    fetcheRecipes();
  }, []);

  return (
    <RecipeContext.Provider value={{ state, setCurrentRecipe }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, RecipeContext };

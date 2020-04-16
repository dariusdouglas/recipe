import React, { useState, useEffect } from 'react';

const mockData = [
  {
    name: 'Chicken Parm',
    ingredientsList: [
      {
        quantity: '2lbs',
        ingredientName: 'Chicken'
      },
      {
        quantity: 'Parm',
        ingredientName: '10lbs'
      }
    ]
  }
];

// Create Context object
const RecipeContext = React.createContext();

// Provider "Provides" all data and states as props from topmost part of the react tree to inner components
const RecipeProvider = props => {
  // url to be used later in fetch
  // const url = '';

  const [recipes, setRecipes] = useState([]);

  const fetcheRecipes = async () => {
    // const response = await fetch(url);
    // const recipeData = response.json();
    const recipeData = mockData;

    setRecipes(recipeData);
  };

  useEffect(() => {
    fetcheRecipes();
  }, []);

  return <RecipeContext.Provider value={{ recipes }}> {props.children} </RecipeContext.Provider>;
};

export { RecipeProvider, RecipeContext };

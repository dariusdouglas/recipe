import React, { useState, useEffect } from 'react';

const mockData = {
  recipes: [
    {
      name: 'Chicken Parm',
      slug: 'chicken_parm',
      image: 'https://s3-media0.fl.yelpcdn.com/bphoto/Rif9rZ9TMEhaYwyFEyE24A/o.jpg',
      ingredients: [
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
      ]
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
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
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
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
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
      ingredients: [
        {
          id: 1,
          name: 'Chicken',
          quantity: '1lbs'
        },
        {
          id: 2,
          name: 'Brocolli',
          quantity: '.5lbs'
        }
      ]
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
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
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
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
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
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
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
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
    },
    {
      name: 'Stir Fry',
      slug: 'stir_fry',
      image:
        'https://irepo.primecp.com/2014/10/199844/West-African-Chicken-Shrimp-Stir-Fry_Medium_ID-776771.jpg?v=776771',
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

  const updateCurrentRecipe = (id, value) => {
    const currentRecipe = { ...state.currentRecipe };
    const ingredientToUpdateIndex = currentRecipe.ingredients.findIndex(
      ingredient => ingredient.id == id
    );
    currentRecipe.ingredients[ingredientToUpdateIndex].name = value;
    console.log('in update current');
    console.log(currentRecipe);
    setRecipes({ ...state, currentRecipe });
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
    <RecipeContext.Provider value={{ state, setCurrentRecipe, updateCurrentRecipe }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export { RecipeProvider, RecipeContext };
